// booking.js - Uses global CONFIG and Auth from config.js

document.addEventListener('DOMContentLoaded', () => {
    injectBookingModal();

    // Use event delegation for dynamic content

    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.book-now-btn');
        if (btn) {
            e.preventDefault(); // CRITICAL: Stop default link/button behavior
            console.log('Book Now Clicked');

            const workerId = btn.dataset.workerId;
            const workerName = btn.dataset.workerName;
            const service = btn.dataset.service;
            console.log('Worker Details:', { workerId, workerName, service });

            if (!workerId || !service) {
                alert('Error: Missing worker details.');
                return;
            }

            if (!Auth.isLoggedIn()) {
                console.log('User not logged in');
                alert('Please login to continue.');
                const isPagesDir = window.location.pathname.includes('/pages/');
                window.location.href = isPagesDir ? 'login.html' : 'pages/login.html';
                return;
            }

            // Redirect to booking page
            const isPagesDir = window.location.pathname.includes('/pages/');
            const targetPage = isPagesDir ? 'book-service.html' : 'pages/book-service.html';
            const targetUrl = `${targetPage}?workerId=${workerId}&service=${encodeURIComponent(service)}&workerName=${encodeURIComponent(workerName)}`;

            console.log('Redirecting to:', targetUrl);
            window.location.href = targetUrl;
        }
    });


    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
});

function injectBookingModal() {
    if (document.getElementById('bookingModal')) return;

    const modalHtml = `
    <div class="modal fade" id="bookingModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-lg rounded-4">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title fw-bold">Book Service</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="d-flex align-items-center gap-3 mb-4 p-3 bg-light rounded-3">
                        <div class="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 48px; height: 48px">
                            <i class="ph-fill ph-user fs-4 text-primary"></i>
                        </div>
                        <div>
                            <small class="text-muted d-block">Booking with</small>
                            <h6 class="mb-0 fw-bold" id="modalWorkerName">Worker Name</h6>
                            <small class="text-primary" id="modalWorkerService">Service</small>
                        </div>
                    </div>

                    <form id="bookingForm">
                        <input type="hidden" id="bookingWorkerId" name="workerId">
                        <input type="hidden" id="bookingService" name="service">
                        
                        <div class="mb-3">
                            <label class="form-label text-muted small fw-semibold">Service Details</label>
                            <textarea class="form-control bg-light border-0" id="bookingDescription" rows="3" placeholder="Describe what you need done..." required></textarea>
                        </div>

                        <div class="row g-3 mb-4">
                            <div class="col-6">
                                <label class="form-label text-muted small fw-semibold">Date</label>
                                <input type="date" class="form-control bg-light border-0" id="bookingDate" required>
                            </div>
                            <div class="col-6">
                                <label class="form-label text-muted small fw-semibold">Time</label>
                                <input type="time" class="form-control bg-light border-0" id="bookingTime" required>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                             <label class="form-label text-muted small fw-semibold">Address</label>
                             <textarea class="form-control bg-light border-0" id="bookingAddress" rows="2" placeholder="Service address" required></textarea>
                        </div>

                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-lg rounded-3">
                                Confirm Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openBookingModal(workerId, workerName, service = 'General Service', hourlyRate) {
    document.getElementById('bookingWorkerId').value = workerId;
    document.getElementById('bookingService').value = service;
    document.getElementById('modalWorkerName').textContent = workerName;
    document.getElementById('modalWorkerService').textContent = service;

    // Pre-fill address if user has one (fetch from localStorage user object)
    const user = getCurrentUser();
    if (user && user.address) {
        document.getElementById('bookingAddress').value = user.address;
    }

    const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
    modal.show();
}

async function handleBookingSubmit(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';
    submitBtn.disabled = true;

    try {
        const formData = {
            workerId: document.getElementById('bookingWorkerId').value,
            service: document.getElementById('bookingService').value,
            description: document.getElementById('bookingDescription').value,
            scheduledDate: document.getElementById('bookingDate').value,
            scheduledTime: document.getElementById('bookingTime').value,
            address: document.getElementById('bookingAddress').value
        };

        const response = await fetch(`${CONFIG.API_BASE_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...Auth.getAuthHeader()
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            const modalEl = document.getElementById('bookingModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            modal.hide();

            showToast('Booking successful! Redirecting to dashboard...', 'success');
            setTimeout(() => {
                window.location.href = 'customer-dashboard.html';
            }, 1000);
        } else {
            showToast(data.message || 'Booking failed', 'danger');
        }
    } catch (error) {
        console.error('Booking error:', error);
        showToast('Something went wrong. Please try again.', 'danger');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

function getCurrentUser() {
    return Auth.getUser();
}

// Toast helper (reused from auth.js if loaded, or simple fallback)
function showToast(message, type = 'info') {
    if (window.showToast) {
        window.showToast(message, type);
    } else {
        alert(message);
    }
}
