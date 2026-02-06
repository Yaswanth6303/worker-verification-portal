/**
 * Worker Dashboard JavaScript
 * Handles fetching and displaying worker stats and bookings
 */

const API_BASE_URL = "http://localhost:3000/api";

// State
let bookings = [];
let workerProfile = null;
let currentUser = null;

// DOM Elements
const loadingState = document.getElementById("loadingState");
const emptyState = document.getElementById("emptyState");
const pendingJobsList = document.getElementById("pendingJobsList");
const recentJobsList = document.getElementById("recentJobsList");
const noRecentJobs = document.getElementById("noRecentJobs");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  setupEventListeners();
});

/**
 * Check if user is logged in and is a worker
 */
function checkAuth() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    window.location.href = "login.html";
    return;
  }

  currentUser = JSON.parse(user);

  // Check if user is a worker
  if (currentUser.role !== "WORKER") {
    window.location.href = "my-bookings.html";
    return;
  }

  document.getElementById("userName").textContent =
    currentUser.fullName?.split(" ")[0] || "Worker";
  document.getElementById("workerName").textContent =
    currentUser.fullName?.split(" ")[0] || "Worker";

  fetchWorkerData();
  fetchBookings();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Logout
  document.getElementById("logoutBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });

  // Toggle availability
  document
    .getElementById("toggleAvailability")
    ?.addEventListener("click", toggleAvailability);
}

/**
 * Fetch worker profile data
 */
async function fetchWorkerData() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success && data.data.workerProfile) {
        workerProfile = data.data.workerProfile;
        updateProfileSummary();
        updateAvailabilityBadge();
      }
    }
  } catch (error) {
    console.error("Error fetching worker data:", error);
  }
}

/**
 * Fetch worker's bookings
 */
async function fetchBookings() {
  showLoading(true);

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/bookings/worker`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch bookings");
    }

    const data = await response.json();
    bookings = data.data || [];

    updateStats();
    renderPendingJobs();
    renderRecentJobs();
    updateJobBreakdown();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    bookings = [];
    renderPendingJobs();
    renderRecentJobs();
  } finally {
    showLoading(false);
  }
}

/**
 * Update stats display
 */
function updateStats() {
  const completed = bookings.filter((b) => b.status === "COMPLETED");
  const pending = bookings.filter(
    (b) => b.status === "PENDING" || b.status === "CONFIRMED",
  );
  const totalEarnings = completed.reduce((sum, b) => sum + (b.amount || 0), 0);

  document.getElementById("totalEarnings").textContent =
    `₹${totalEarnings.toLocaleString()}`;
  document.getElementById("totalJobs").textContent = bookings.length;
  document.getElementById("pendingJobs").textContent = pending.length;
  document.getElementById("avgRating").textContent =
    workerProfile?.rating?.toFixed(1) || "0.0";
}

/**
 * Update profile summary section
 */
function updateProfileSummary() {
  if (!workerProfile) return;

  // Skills
  const skillsContainer = document.getElementById("skillsList");
  if (workerProfile.skills && workerProfile.skills.length > 0) {
    skillsContainer.innerHTML = workerProfile.skills
      .slice(0, 3)
      .map(
        (s) =>
          `<span class="badge bg-primary bg-opacity-10 text-primary me-1">${s}</span>`,
      )
      .join("");
  }

  // Experience
  const expMap = {
    "0-1": "< 1 year",
    "1-3": "1-3 years",
    "3-5": "3-5 years",
    "5+": "5+ years",
  };
  document.getElementById("experienceLevel").textContent =
    expMap[workerProfile.experience] || workerProfile.experience || "-";

  // Hourly rate
  document.getElementById("hourlyRate").textContent =
    `₹${workerProfile.hourlyRate || 0}/hr`;

  // Verification status
  const statusEl = document.getElementById("verificationStatus");
  const statusMap = {
    PENDING: { class: "bg-warning text-warning", text: "Pending" },
    VERIFIED: { class: "bg-success text-success", text: "Verified" },
    REJECTED: { class: "bg-danger text-danger", text: "Rejected" },
  };
  const status =
    statusMap[workerProfile.verificationStatus] || statusMap.PENDING;
  statusEl.className = `badge ${status.class} bg-opacity-10`;
  statusEl.textContent = status.text;
}

/**
 * Update availability badge
 */
function updateAvailabilityBadge() {
  const badge = document.getElementById("availabilityBadge");
  const isAvailable = workerProfile?.isAvailable ?? true;

  if (isAvailable) {
    badge.className = "badge bg-success bg-opacity-10 text-success px-3 py-2";
    badge.innerHTML = '<i class="ph-fill ph-check-circle me-1"></i>Available';
  } else {
    badge.className =
      "badge bg-secondary bg-opacity-10 text-secondary px-3 py-2";
    badge.innerHTML = '<i class="ph-fill ph-minus-circle me-1"></i>Unavailable';
  }
}

/**
 * Toggle worker availability
 */
async function toggleAvailability() {
  try {
    const token = localStorage.getItem("token");
    const newStatus = !(workerProfile?.isAvailable ?? true);

    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isAvailable: newStatus }),
    });

    if (response.ok) {
      if (workerProfile) workerProfile.isAvailable = newStatus;
      updateAvailabilityBadge();
      showToast(
        "Success",
        `You are now ${newStatus ? "available" : "unavailable"} for new jobs`,
        "success",
      );
    }
  } catch (error) {
    console.error("Error toggling availability:", error);
    showToast("Error", "Failed to update availability", "error");
  }
}

/**
 * Render pending jobs
 */
function renderPendingJobs() {
  const pending = bookings.filter((b) => b.status === "PENDING");

  if (pending.length === 0) {
    emptyState?.classList.remove("d-none");
    pendingJobsList?.classList.add("d-none");
    return;
  }

  emptyState?.classList.add("d-none");
  pendingJobsList?.classList.remove("d-none");

  pendingJobsList.innerHTML = pending
    .map((job) => createPendingJobCard(job))
    .join("");
}

/**
 * Create pending job card
 */
function createPendingJobCard(booking) {
  const scheduledDate = new Date(booking.scheduledDate).toLocaleDateString(
    "en-IN",
    {
      weekday: "short",
      month: "short",
      day: "numeric",
    },
  );

  return `
    <div class="card border-0 shadow-sm rounded-4 mb-3">
      <div class="card-body p-4">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="d-flex align-items-start gap-3">
              <div class="bg-warning bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 50px; height: 50px">
                <i class="ph-fill ph-wrench fs-4 text-warning"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">${booking.service}</h6>
                <p class="text-muted small mb-2">Customer: <strong>${booking.customer?.name || "Customer"}</strong></p>
                ${booking.description ? `<p class="text-secondary small mb-2">${booking.description}</p>` : ""}
                <div class="d-flex flex-wrap gap-3 text-muted small">
                  <span><i class="ph ph-calendar me-1"></i>${scheduledDate}</span>
                  <span><i class="ph ph-clock me-1"></i>${booking.scheduledTime || "TBD"}</span>
                  <span><i class="ph ph-map-pin me-1"></i>${booking.address || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-md-end mt-3 mt-md-0">
            <div class="mb-2">
              <span class="fw-bold fs-5 text-success">₹${(booking.amount || 0).toLocaleString()}</span>
            </div>
            <div class="d-flex gap-2 justify-content-md-end">
              <button class="btn btn-success rounded-pill px-3" onclick="acceptJob('${booking.id}')">
                <i class="ph ph-check me-1"></i>Accept
              </button>
              <button class="btn btn-outline-danger rounded-pill px-3" onclick="declineJob('${booking.id}')">
                <i class="ph ph-x me-1"></i>Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render recent completed jobs
 */
function renderRecentJobs() {
  const completed = bookings
    .filter((b) => b.status === "COMPLETED")
    .slice(0, 5);

  if (completed.length === 0) {
    noRecentJobs?.classList.remove("d-none");
    recentJobsList.innerHTML = "";
    return;
  }

  noRecentJobs?.classList.add("d-none");
  recentJobsList.innerHTML = completed
    .map(
      (job) => `
    <div class="d-flex align-items-center justify-content-between py-3 border-bottom">
      <div class="d-flex align-items-center gap-3">
        <div class="bg-success bg-opacity-10 rounded-circle p-2">
          <i class="ph-fill ph-check text-success"></i>
        </div>
        <div>
          <span class="fw-semibold">${job.service}</span>
          <small class="text-muted d-block">${job.customer?.name || "Customer"}</small>
        </div>
      </div>
      <span class="text-success fw-bold">₹${(job.amount || 0).toLocaleString()}</span>
    </div>
  `,
    )
    .join("");
}

/**
 * Update job breakdown chart
 */
function updateJobBreakdown() {
  const total = bookings.length || 1;
  const counts = {
    completed: bookings.filter((b) => b.status === "COMPLETED").length,
    inProgress: bookings.filter(
      (b) => b.status === "CONFIRMED" || b.status === "IN_PROGRESS",
    ).length,
    pending: bookings.filter((b) => b.status === "PENDING").length,
    cancelled: bookings.filter((b) => b.status === "CANCELLED").length,
  };

  document.getElementById("completedCount").textContent = counts.completed;
  document.getElementById("inProgressCount").textContent = counts.inProgress;
  document.getElementById("pendingCount").textContent = counts.pending;
  document.getElementById("cancelledCount").textContent = counts.cancelled;

  document.getElementById("completedBar").style.width =
    `${(counts.completed / total) * 100}%`;
  document.getElementById("inProgressBar").style.width =
    `${(counts.inProgress / total) * 100}%`;
  document.getElementById("pendingBar").style.width =
    `${(counts.pending / total) * 100}%`;
  document.getElementById("cancelledBar").style.width =
    `${(counts.cancelled / total) * 100}%`;
}

/**
 * Accept a job
 */
async function acceptJob(bookingId) {
  await updateJobStatus(bookingId, "CONFIRMED");
}

/**
 * Decline a job
 */
async function declineJob(bookingId) {
  if (!confirm("Are you sure you want to decline this job?")) return;
  await updateJobStatus(bookingId, "CANCELLED");
}

/**
 * Update job status
 */
async function updateJobStatus(bookingId, status) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${API_BASE_URL}/bookings/${bookingId}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      },
    );

    const data = await response.json();

    if (data.success) {
      showToast(
        "Success",
        status === "CONFIRMED" ? "Job accepted!" : "Job declined",
        "success",
      );
      fetchBookings(); // Refresh
    } else {
      showToast("Error", data.message || "Failed to update job", "error");
    }
  } catch (error) {
    console.error("Error updating job:", error);
    showToast("Error", "Failed to update job status", "error");
  }
}

/**
 * Show/hide loading
 */
function showLoading(show) {
  loadingState?.classList.toggle("d-none", !show);
}

/**
 * Show toast notification
 */
function showToast(title, message, type = "info") {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className =
      "toast-container position-fixed bottom-0 end-0 p-3";
    document.body.appendChild(toastContainer);
  }

  const toastId = "toast-" + Date.now();
  const bgClass =
    type === "success"
      ? "bg-success"
      : type === "error"
        ? "bg-danger"
        : "bg-primary";

  toastContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div id="${toastId}" class="toast align-items-center text-white ${bgClass} border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body"><strong>${title}</strong><br>${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `,
  );

  const toast = new bootstrap.Toast(document.getElementById(toastId));
  toast.show();
}
