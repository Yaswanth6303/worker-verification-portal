/**
 * Find Workers Page JavaScript
 * Handles fetching workers, filtering, and booking functionality
 */

const API_BASE_URL = "http://localhost:3000/api";

// State
let allWorkers = [];
let filteredWorkers = [];
let currentUser = null;

// DOM Elements
const workersGrid = document.getElementById("workersGrid");
const loadingState = document.getElementById("loadingState");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const skillFilter = document.getElementById("skillFilter");
const ratingFilter = document.getElementById("ratingFilter");
const availableFilter = document.getElementById("availableFilter");
const sortBy = document.getElementById("sortBy");
const applyFiltersBtn = document.getElementById("applyFilters");
const clearFiltersBtn = document.getElementById("clearFilters");
const bookingForm = document.getElementById("bookingForm");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();

  // Handle URL parameters for filtering
  const urlParams = new URLSearchParams(window.location.search);
  const skillParam = urlParams.get("skill");
  if (skillParam && skillFilter) {
    skillFilter.value = skillParam;
  }

  // If we have a skill param, fetch only those workers
  if (skillParam) {
    fetchWorkers({ skill: skillParam });
  } else {
    fetchWorkers();
  }

  setupEventListeners();
  setMinDate();
});

/**
 * Check if user is logged in
 */
function checkAuth() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (token && user) {
    currentUser = JSON.parse(user);
    document.getElementById("guestNav").classList.add("d-none");
    document.getElementById("userNav").classList.remove("d-none");
    document.getElementById("userName").textContent =
      currentUser.fullName?.split(" ")[0] || "User";
  }
}

/**
 * Set minimum date for booking to today
 */
function setMinDate() {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("bookingDate").setAttribute("min", today);
}

/**
 * Fetch workers from API
 */
async function fetchWorkers(filters = {}) {
  showLoading(true);

  try {
    const params = new URLSearchParams();
    if (filters.skill) params.append("skill", filters.skill);
    if (filters.minRating) params.append("minRating", filters.minRating);
    if (filters.available !== undefined)
      params.append("available", filters.available);

    const url = `${API_BASE_URL}/workers${params.toString() ? "?" + params.toString() : ""}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch workers");
    }

    const data = await response.json();
    allWorkers = data.data || [];
    filteredWorkers = [...allWorkers];

    sortWorkers();
    renderWorkers();
  } catch (error) {
    console.error("Error fetching workers:", error);
    // Show demo workers if API fails
    showDemoWorkers();
  } finally {
    showLoading(false);
  }
}

/**
 * Show empty state when API is not available
 */
function showDemoWorkers() {
  allWorkers = [];
  filteredWorkers = [];
  renderWorkers();
  // Update results count with helpful message
  if (resultsCount) {
    resultsCount.textContent =
      "API not available. Please start the server on port 3000.";
  }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  applyFiltersBtn?.addEventListener("click", applyFilters);
  clearFiltersBtn?.addEventListener("click", clearFilters);
  sortBy?.addEventListener("change", () => {
    sortWorkers();
    renderWorkers();
  });
  bookingForm?.addEventListener("submit", handleBookingSubmit);

  // Logout functionality
  document.getElementById("logoutBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  });
}

/**
 * Apply filters
 */
function applyFilters() {
  const skill = skillFilter.value;
  const minRating = ratingFilter.value;
  const available = availableFilter.checked;

  filteredWorkers = allWorkers.filter((worker) => {
    // Skill filter
    if (
      skill &&
      !worker.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase()))
    ) {
      return false;
    }

    // Rating filter
    if (minRating && worker.rating < parseFloat(minRating)) {
      return false;
    }

    // Availability filter
    if (available && !worker.isAvailable) {
      return false;
    }

    return true;
  });

  sortWorkers();
  renderWorkers();
}

/**
 * Clear all filters
 */
function clearFilters() {
  skillFilter.value = "";
  ratingFilter.value = "";
  availableFilter.checked = true;
  filteredWorkers = [...allWorkers];
  sortWorkers();
  renderWorkers();
}

/**
 * Sort workers based on selected option
 */
function sortWorkers() {
  const sortOption = sortBy?.value || "rating";

  filteredWorkers.sort((a, b) => {
    switch (sortOption) {
      case "rating":
        return b.rating - a.rating;
      case "bookings":
        return b.totalBookings - a.totalBookings;
      case "rate-low":
        return (a.hourlyRate || 0) - (b.hourlyRate || 0);
      case "rate-high":
        return (b.hourlyRate || 0) - (a.hourlyRate || 0);
      default:
        return 0;
    }
  });
}

/**
 * Render workers grid
 */
function renderWorkers() {
  if (!workersGrid) return;

  if (filteredWorkers.length === 0) {
    workersGrid.innerHTML = "";
    emptyState?.classList.remove("d-none");
    resultsCount.textContent = "No workers found";
    return;
  }

  emptyState?.classList.add("d-none");
  resultsCount.textContent = `${filteredWorkers.length} worker${filteredWorkers.length > 1 ? "s" : ""} found`;

  workersGrid.innerHTML = filteredWorkers
    .map((worker) => createWorkerCard(worker))
    .join("");

  // Add click handlers for book buttons
  document.querySelectorAll(".book-worker-btn").forEach((btn) => {
    btn.addEventListener("click", () => openBookingModal(btn.dataset.workerId));
  });
}

/**
 * Create worker card HTML
 */
function createWorkerCard(worker) {
  const skillsDisplay =
    worker.skills
      ?.slice(0, 2)
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(", ") || "General";

  const experienceText =
    {
      "0-1": "Less than 1 year",
      "1-3": "1-3 years",
      "3-5": "3-5 years",
      "5-10": "5-10 years",
      "10+": "10+ years",
    }[worker.experience] || worker.experience;

  const skillColorMap = {
    plumbing: "primary",
    electrical: "warning",
    painting: "danger",
    carpentry: "info",
    hvac: "purple",
    cleaning: "success",
  };

  const mainSkill = worker.skills?.[0]?.toLowerCase() || "primary";
  const skillColor = skillColorMap[mainSkill] || "primary";

  return `
    <div class="col-md-6 col-xl-4">
      <div class="card h-100 border-0 shadow-sm rounded-4 service-card">
        <div class="card-body p-4">
          <div class="d-flex align-items-start gap-3 mb-3">
            <div class="position-relative">
              <div
                class="bg-${skillColor} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                style="width: 60px; height: 60px"
              >
                ${
                  worker.profilePicture
                    ? `<img src="${worker.profilePicture}" class="rounded-circle" style="width: 60px; height: 60px; object-fit: cover" alt="${worker.fullName}">`
                    : `<i class="ph-fill ph-user fs-3 text-${skillColor}"></i>`
                }
              </div>
              ${
                worker.isAvailable
                  ? `<span class="position-absolute bottom-0 end-0 bg-success rounded-circle border border-2 border-white" style="width: 14px; height: 14px"></span>`
                  : `<span class="position-absolute bottom-0 end-0 bg-danger rounded-circle border border-2 border-white" style="width: 14px; height: 14px"></span>`
              }
            </div>
            <div class="flex-grow-1">
              <h6 class="fw-bold mb-1">${worker.fullName}</h6>
              <p class="text-muted small mb-1">${skillsDisplay}</p>
              <span class="badge bg-${skillColor} bg-opacity-10 text-${skillColor} small">${experienceText}</span>
            </div>
          </div>
          
          ${
            worker.bio
              ? `
            <p class="text-secondary small mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${worker.bio}
            </p>
          `
              : ""
          }
          
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center gap-3">
              <span class="badge bg-warning bg-opacity-10 text-warning px-2 py-1">
                <i class="ph-fill ph-star me-1"></i>${worker.rating?.toFixed(1) || "0.0"}
              </span>
              <span class="text-muted small">${worker.totalReviews || 0} reviews</span>
            </div>
            <span class="fw-bold text-primary">₹${worker.hourlyRate || 0}/hr</span>
          </div>
          
          <div class="d-flex gap-2">
            <button 
              class="btn btn-primary flex-grow-1 rounded-pill book-worker-btn"
              data-worker-id="${worker.id}"
              ${!worker.isAvailable ? "disabled" : ""}
            >
              <i class="ph ph-calendar-check me-1"></i>
              ${worker.isAvailable ? "Book Now" : "Unavailable"}
            </button>
            <button class="btn btn-outline-secondary rounded-pill px-3" title="View Profile">
              <i class="ph ph-user"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Show/hide loading state
 */
function showLoading(show) {
  if (loadingState) {
    loadingState.classList.toggle("d-none", !show);
  }
  if (workersGrid) {
    workersGrid.classList.toggle("d-none", show);
  }
}

/**
 * Open booking modal
 */
function openBookingModal(workerId) {
  // Check if user is logged in
  if (!currentUser) {
    const loginModal = new bootstrap.Modal(
      document.getElementById("loginRequiredModal"),
    );
    loginModal.show();
    return;
  }

  const worker = filteredWorkers.find((w) => w.id === workerId);
  if (!worker) return;

  // Populate modal with worker info
  document.getElementById("bookingWorkerId").value = worker.id;
  document.getElementById("modalWorkerName").textContent = worker.fullName;
  document.getElementById("modalWorkerSkills").textContent =
    worker.skills?.join(", ") || "General";
  document.getElementById("modalWorkerRating").textContent =
    worker.rating?.toFixed(1) || "0.0";
  document.getElementById("modalWorkerRate").textContent =
    `₹${worker.hourlyRate || 0}/hr`;

  // Pre-select service based on worker's main skill
  const mainSkill = worker.skills?.[0]?.toLowerCase();
  const serviceMap = {
    plumbing: "Plumbing",
    electrical: "Electrical",
    painting: "Painting",
    carpentry: "Carpentry",
    hvac: "HVAC",
    cleaning: "Cleaning",
  };
  document.getElementById("bookingService").value = serviceMap[mainSkill] || "";

  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("bookingModal"));
  modal.show();
}

/**
 * Handle booking form submission
 */
async function handleBookingSubmit(e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBooking");
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<span class="spinner-border spinner-border-sm me-2"></span>Booking...';

  const bookingData = {
    workerId: document.getElementById("bookingWorkerId").value,
    service: document.getElementById("bookingService").value,
    description: document.getElementById("bookingDescription").value,
    scheduledDate: document.getElementById("bookingDate").value,
    scheduledTime: document.getElementById("bookingTime").value,
    address: document.getElementById("bookingAddress").value,
  };

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();

    if (data.success) {
      // Close modal and show success
      bootstrap.Modal.getInstance(
        document.getElementById("bookingModal"),
      ).hide();
      bookingForm.reset();
      showToast(
        "Success",
        "Booking created successfully! The worker will contact you soon.",
        "success",
      );
    } else {
      showToast("Error", data.message || "Failed to create booking", "error");
    }
  } catch (error) {
    console.error("Booking error:", error);
    showToast("Error", "Failed to create booking. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

/**
 * Show toast notification
 */
function showToast(title, message, type = "info") {
  // Create toast container if it doesn't exist
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

  const toastHTML = `
    <div id="${toastId}" class="toast align-items-center text-white ${bgClass} border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">
          <strong>${title}</strong><br>
          ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML("beforeend", toastHTML);
  const toast = new bootstrap.Toast(document.getElementById(toastId));
  toast.show();

  // Remove toast element after it's hidden
  document
    .getElementById(toastId)
    .addEventListener("hidden.bs.toast", function () {
      this.remove();
    });
}
