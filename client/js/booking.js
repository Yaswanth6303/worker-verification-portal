const API_BASE_URL = 'http://localhost:3000/api';

document.addEventListener('DOMContentLoaded', () => {
    injectBookingModal();

    // Use event delegation for dynamic content
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.book-now-btn')) {
            const btn = e.target.closest('.book-now-btn');
            const workerId = btn.dataset.workerId;
            const workerName = btn.dataset.workerName;
            const service = btn.dataset.service; // Assuming we add this
            const hourlyRate = btn.dataset.hourlyRate;

            if (!isLoggedIn()) {
                window.location.href = 'login.html';
                return;
            }

            openBookingModal(workerId, workerName, service, hourlyRate);
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

        const response = await fetch(`${API_BASE_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...getAuthHeader()
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            const modalEl = document.getElementById('bookingModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            modal.hide();

            showToast('Booking request sent successfully!', 'success');
            e.target.reset();
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

// Reuse auth helpers if available globally, or redefine
function isLoggedIn() {
    return !!localStorage.getItem('token');
}

function getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

function getAuthHeader() {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
}

// Toast helper (reused from auth.js if loaded, or simple fallback)
function showToast(message, type = 'info') {
    if (window.showToast) {
        window.showToast(message, type);
    } else {
        alert(message);
    }
}
