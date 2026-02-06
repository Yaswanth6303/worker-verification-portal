/**
 * My Bookings Page JavaScript
 * Handles fetching and displaying user's bookings
 */

const API_BASE_URL = "http://localhost:3000/api";

// State
let bookings = [];
let currentUser = null;

// DOM Elements
const loginRequired = document.getElementById("loginRequired");
const bookingsSection = document.getElementById("bookingsSection");
const loadingState = document.getElementById("loadingState");
const emptyState = document.getElementById("emptyState");
const bookingsList = document.getElementById("bookingsList");
const statsRow = document.getElementById("statsRow");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  setupEventListeners();
});

/**
 * Check if user is logged in
 */
function checkAuth() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (token && user) {
    currentUser = JSON.parse(user);
    document.getElementById("guestNav")?.classList.add("d-none");
    document.getElementById("userNav")?.classList.remove("d-none");
    document.getElementById("userName").textContent =
      currentUser.fullName?.split(" ")[0] || "User";

    // Switch navigation based on user role
    if (currentUser.role === "WORKER") {
      // Show worker navigation, hide customer navigation
      document.getElementById("customerNav")?.classList.add("d-none");
      document.getElementById("workerNav")?.classList.remove("d-none");

      // Update logo link to go to worker dashboard
      const logoLink = document.querySelector(".navbar-brand");
      if (logoLink) {
        logoLink.href = "worker-dashboard.html";
      }

      // Update page title and subtitle for workers
      const pageTitle = document.querySelector("h1.display-5");
      const pageSubtitle = document.querySelector(".lead.text-secondary");
      const pageTitleSmall = document.querySelector(".navbar-brand small");
      if (pageTitle) pageTitle.textContent = "Job History";
      if (pageSubtitle)
        pageSubtitle.textContent = "View and manage your job assignments.";
      if (pageTitleSmall) pageTitleSmall.textContent = "Worker Dashboard";

      // Update stats labels for workers
      const totalSpentLabel = document.querySelector(
        "#statsRow .col-6:last-child small",
      );
      if (totalSpentLabel) totalSpentLabel.textContent = "Total Earned";
    } else {
      // Show customer navigation
      document.getElementById("customerNav")?.classList.remove("d-none");
      document.getElementById("workerNav")?.classList.add("d-none");
    }

    // Show bookings section and fetch bookings
    loginRequired?.classList.add("d-none");
    bookingsSection?.classList.remove("d-none");
    fetchBookings();
  } else {
    // Show login required message
    loginRequired?.classList.remove("d-none");
    bookingsSection?.classList.add("d-none");
    loadingState?.classList.add("d-none");
  }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Logout functionality
  document.getElementById("logoutBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });
}

/**
 * Fetch user's bookings from API
 */
async function fetchBookings() {
  showLoading(true);

  try {
    const token = localStorage.getItem("token");
    const endpoint =
      currentUser.role === "WORKER"
        ? `${API_BASE_URL}/bookings/worker`
        : `${API_BASE_URL}/bookings/customer`;

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch bookings");
    }

    const data = await response.json();
    bookings = data.data || [];

    updateStats();
    renderBookings();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    bookings = [];
    renderBookings();
  } finally {
    showLoading(false);
  }
}

/**
 * Update statistics
 */
function updateStats() {
  const total = bookings.length;
  const pending = bookings.filter(
    (b) => b.status === "PENDING" || b.status === "CONFIRMED",
  ).length;
  const completed = bookings.filter((b) => b.status === "COMPLETED").length;
  const totalSpent = bookings
    .filter((b) => b.status === "COMPLETED")
    .reduce((sum, b) => sum + (b.amount || 0), 0);

  document.getElementById("totalBookings").textContent = total;
  document.getElementById("pendingBookings").textContent = pending;
  document.getElementById("completedBookings").textContent = completed;
  document.getElementById("totalSpent").textContent =
    `₹${totalSpent.toLocaleString()}`;
}

/**
 * Render bookings list
 */
function renderBookings() {
  if (bookings.length === 0) {
    bookingsList?.classList.add("d-none");
    emptyState?.classList.remove("d-none");
    statsRow?.classList.add("d-none");
    return;
  }

  emptyState?.classList.add("d-none");
  bookingsList?.classList.remove("d-none");
  statsRow?.classList.remove("d-none");

  // Sort by date (newest first)
  const sortedBookings = [...bookings].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  bookingsList.innerHTML = sortedBookings
    .map((booking) => createBookingCard(booking))
    .join("");
}

/**
 * Create booking card HTML
 */
function createBookingCard(booking) {
  const statusColors = {
    PENDING: { bg: "warning", text: "warning", label: "Pending" },
    CONFIRMED: { bg: "info", text: "info", label: "Confirmed" },
    IN_PROGRESS: { bg: "primary", text: "primary", label: "In Progress" },
    COMPLETED: { bg: "success", text: "success", label: "Completed" },
    CANCELLED: { bg: "danger", text: "danger", label: "Cancelled" },
  };

  const status = statusColors[booking.status] || statusColors.PENDING;

  const scheduledDate = new Date(booking.scheduledDate).toLocaleDateString(
    "en-IN",
    {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );

  const createdAt = new Date(booking.createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Determine if showing worker or customer info based on user role
  const isWorker = currentUser.role === "WORKER";
  const personName = isWorker
    ? booking.customer?.fullName || booking.customer?.name || "Customer"
    : booking.worker?.name || booking.worker?.user?.fullName || "Worker";
  const personLabel = isWorker ? "Customer" : "Worker";

  return `
    <div class="card border-0 shadow-sm rounded-4 mb-3">
      <div class="card-body p-4">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="d-flex align-items-start gap-3">
              <div class="bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 56px; height: 56px">
                <i class="ph-fill ph-wrench fs-3 text-primary"></i>
              </div>
              <div class="flex-grow-1">
                <div class="d-flex align-items-center gap-2 mb-1">
                  <h6 class="fw-bold mb-0">${booking.service || "Service"}</h6>
                  <span class="badge bg-${status.bg} bg-opacity-10 text-${status.text} small">${status.label}</span>
                </div>
                <p class="text-muted small mb-2">${personLabel}: <strong>${personName}</strong></p>
                ${booking.description ? `<p class="text-secondary small mb-2" style="max-width: 400px;">${booking.description}</p>` : ""}
                <div class="d-flex flex-wrap gap-3 text-muted small">
                  <span><i class="ph ph-calendar me-1"></i>${scheduledDate}</span>
                  <span><i class="ph ph-clock me-1"></i>${booking.scheduledTime || "TBD"}</span>
                  ${booking.address ? `<span><i class="ph ph-map-pin me-1"></i>${booking.address}</span>` : ""}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-md-end mt-3 mt-md-0">
            <div class="mb-2">
              <span class="fw-bold fs-5 text-primary">₹${(booking.amount || 0).toLocaleString()}</span>
            </div>
            <small class="text-muted d-block mb-2">Booked on ${createdAt}</small>
            ${
              booking.status === "PENDING" && !isWorker
                ? `<button class="btn btn-sm btn-outline-danger rounded-pill" onclick="cancelBooking('${booking.id}')">
                    <i class="ph ph-x me-1"></i>Cancel
                  </button>`
                : ""
            }
            ${
              booking.status === "PENDING" && isWorker
                ? `
                  <button class="btn btn-sm btn-success rounded-pill me-1" onclick="updateBookingStatus('${booking.id}', 'CONFIRMED')">
                    <i class="ph ph-check me-1"></i>Accept
                  </button>
                  <button class="btn btn-sm btn-outline-danger rounded-pill" onclick="updateBookingStatus('${booking.id}', 'CANCELLED')">
                    <i class="ph ph-x me-1"></i>Decline
                  </button>
                `
                : ""
            }
            ${
              booking.status === "CONFIRMED" && isWorker
                ? `<button class="btn btn-sm btn-primary rounded-pill" onclick="updateBookingStatus('${booking.id}', 'COMPLETED')">
                    <i class="ph ph-check-circle me-1"></i>Mark Complete
                  </button>`
                : ""
            }
            ${
              booking.status === "COMPLETED" && !isWorker && !booking.hasReview
                ? `<button class="btn btn-sm btn-warning rounded-pill" onclick="openRatingModal('${booking.id}', '${booking.worker?.id}', '${booking.worker?.name}', '${booking.service}')">
                    <i class="ph ph-star me-1"></i>Rate Worker
                  </button>`
                : ""
            }
            ${
              booking.status === "COMPLETED" && !isWorker && booking.hasReview
                ? `<span class="badge bg-success bg-opacity-10 text-success px-3 py-2">
                    <i class="ph-fill ph-star me-1"></i>Rated ${booking.review?.rating}/5
                  </span>`
                : ""
            }
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
  if (bookingsList) {
    bookingsList.classList.toggle("d-none", show);
  }
}

/**
 * Update booking status (for workers)
 */
async function updateBookingStatus(bookingId, status) {
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
      showToast("Success", "Booking status updated!", "success");
      fetchBookings(); // Refresh bookings
    } else {
      showToast("Error", data.message || "Failed to update status", "error");
    }
  } catch (error) {
    console.error("Error updating booking:", error);
    showToast("Error", "Failed to update booking status", "error");
  }
}

/**
 * Cancel booking (for customers)
 */
async function cancelBooking(bookingId) {
  if (!confirm("Are you sure you want to cancel this booking?")) {
    return;
  }

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
        body: JSON.stringify({ status: "CANCELLED" }),
      },
    );

    const data = await response.json();

    if (data.success) {
      showToast("Success", "Booking cancelled", "success");
      fetchBookings(); // Refresh bookings
    } else {
      showToast("Error", data.message || "Failed to cancel booking", "error");
    }
  } catch (error) {
    console.error("Error cancelling booking:", error);
    showToast("Error", "Failed to cancel booking", "error");
  }
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

  document
    .getElementById(toastId)
    .addEventListener("hidden.bs.toast", function () {
      this.remove();
    });
}

/**
 * Open rating modal
 */
function openRatingModal(bookingId, workerId, workerName, service) {
  // Set modal values
  document.getElementById("ratingBookingId").value = bookingId;
  document.getElementById("ratingWorkerId").value = workerId;
  document.getElementById("ratingWorkerName").textContent =
    workerName || "Worker";
  document.getElementById("ratingService").textContent = service || "Service";

  // Reset form
  document.getElementById("selectedRating").value = "0";
  document.getElementById("ratingComment").value = "";
  document.getElementById("ratingText").textContent = "Select a rating";
  resetStars();

  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("ratingModal"));
  modal.show();
}

/**
 * Reset stars to unselected state
 */
function resetStars() {
  document.querySelectorAll(".star-btn").forEach((star) => {
    star.classList.remove("ph-fill");
    star.classList.add("ph");
    star.style.color = "#d1d5db";
  });
}

/**
 * Setup star rating interaction
 */
function setupStarRating() {
  const stars = document.querySelectorAll(".star-btn");
  const ratingTexts = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  stars.forEach((star) => {
    // Click to select
    star.addEventListener("click", () => {
      const rating = parseInt(star.dataset.rating);
      document.getElementById("selectedRating").value = rating;
      document.getElementById("ratingText").textContent = ratingTexts[rating];

      // Update star visuals
      stars.forEach((s) => {
        const starRating = parseInt(s.dataset.rating);
        if (starRating <= rating) {
          s.classList.remove("ph");
          s.classList.add("ph-fill");
          s.style.color = "#fbbf24";
        } else {
          s.classList.remove("ph-fill");
          s.classList.add("ph");
          s.style.color = "#d1d5db";
        }
      });
    });

    // Hover effects
    star.addEventListener("mouseenter", () => {
      const rating = parseInt(star.dataset.rating);
      stars.forEach((s) => {
        const starRating = parseInt(s.dataset.rating);
        if (starRating <= rating) {
          s.style.color = "#fbbf24";
        }
      });
    });

    star.addEventListener("mouseleave", () => {
      const selectedRating = parseInt(
        document.getElementById("selectedRating").value,
      );
      stars.forEach((s) => {
        const starRating = parseInt(s.dataset.rating);
        if (starRating <= selectedRating) {
          s.style.color = "#fbbf24";
        } else {
          s.style.color = "#d1d5db";
        }
      });
    });
  });
}

/**
 * Handle rating form submission
 */
async function handleRatingSubmit(e) {
  e.preventDefault();

  const rating = parseInt(document.getElementById("selectedRating").value);
  if (rating < 1 || rating > 5) {
    showToast("Error", "Please select a rating", "error");
    return;
  }

  const submitBtn = document.getElementById("submitRating");
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';

  const reviewData = {
    bookingId: document.getElementById("ratingBookingId").value,
    rating: rating,
    comment: document.getElementById("ratingComment").value,
  };

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reviewData),
    });

    const data = await response.json();

    if (data.success) {
      // Close modal
      bootstrap.Modal.getInstance(
        document.getElementById("ratingModal"),
      ).hide();
      showToast("Success", "Thank you for your review!", "success");

      // Refresh bookings to show updated state
      fetchBookings();
    } else {
      showToast("Error", data.message || "Failed to submit review", "error");
    }
  } catch (error) {
    console.error("Error submitting review:", error);
    showToast("Error", "Failed to submit review. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

// Setup rating modal when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupStarRating();
  document
    .getElementById("ratingForm")
    ?.addEventListener("submit", handleRatingSubmit);
});
