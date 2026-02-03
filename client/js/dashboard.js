// dashboard.js - Uses global CONFIG and Auth

document.addEventListener('DOMContentLoaded', () => {
    // Check auth
    if (!Auth.isLoggedIn()) {
        Auth.logout(); // Will redirect to login
        return;
    }

    const user = Auth.getUser();
    const userRole = Auth.getRole();

    // Set User Name
    const userNameEl = document.getElementById('userName');
    if (userNameEl && user.fullName) {
        userNameEl.textContent = user.fullName;
    }

    // Load data based on role
    if (userRole === 'WORKER') {
        loadWorkerData();
    } else {
        loadCustomerData();
    }
});

function logout() {
    Auth.logout();
}

async function loadWorkerData() {
    try {
        const headers = Auth.getAuthHeader();

        // 1. Fetch Stats
        const statsRes = await fetch(`${CONFIG.API_BASE_URL}/dashboard/worker/stats`, { headers });
        const statsData = await statsRes.json();

        if (statsData.success) {
            document.getElementById('totalEarnings').textContent = `₹${statsData.data.totalEarnings || 0}`;
            document.getElementById('totalJobs').textContent = statsData.data.totalJobs || 0;
            document.getElementById('avgRating').textContent = (statsData.data.rating || 0).toFixed(1);
            document.getElementById('totalReviews').textContent = `(${statsData.data.totalReviews || 0} Reviews)`;
        }

        // 2. Fetch Bookings
        const bookingsRes = await fetch(`${CONFIG.API_BASE_URL}/bookings`, { headers });
        const bookingsData = await bookingsRes.json();

        if (bookingsData.success) {
            renderWorkerBookings(bookingsData.data);
        }

    } catch (error) {
        console.error('Error loading worker data:', error);
    }
}

async function loadCustomerData() {
    try {
        const headers = Auth.getAuthHeader();

        // Fetch Bookings
        const bookingsRes = await fetch(`${CONFIG.API_BASE_URL}/bookings`, { headers });
        const bookingsData = await bookingsRes.json();

        if (bookingsData.success) {
            renderCustomerBookings(bookingsData.data);
        }

    } catch (error) {
        console.error('Error loading customer data:', error);
    }
}

function renderWorkerBookings(bookings) {
    const upcomingContainer = document.getElementById('upcomingList');
    const completedContainer = document.getElementById('completedList');

    if (!upcomingContainer || !completedContainer) return; // Not on worker dashboard

    upcomingContainer.innerHTML = '';
    completedContainer.innerHTML = '';

    const upcoming = bookings.filter(b => ['PENDING', 'CONFIRMED', 'IN_PROGRESS'].includes(b.status));
    const completed = bookings.filter(b => ['COMPLETED', 'CANCELLED'].includes(b.status));

    if (upcoming.length === 0) upcomingContainer.innerHTML = '<p class="text-center text-muted">No upcoming bookings.</p>';
    if (completed.length === 0) completedContainer.innerHTML = '<p class="text-center text-muted">No past jobs.</p>';

    upcoming.forEach(booking => upcomingContainer.appendChild(createBookingCard(booking, 'WORKER')));
    completed.forEach(booking => completedContainer.appendChild(createBookingCard(booking, 'WORKER')));
}

function renderCustomerBookings(bookings) {
    const currentContainer = document.getElementById('currentList');
    const historyContainer = document.getElementById('historyList');

    if (!currentContainer || !historyContainer) return; // Not on customer dashboard

    currentContainer.innerHTML = '';
    historyContainer.innerHTML = '';

    const current = bookings.filter(b => ['PENDING', 'CONFIRMED', 'IN_PROGRESS'].includes(b.status));
    const history = bookings.filter(b => ['COMPLETED', 'CANCELLED'].includes(b.status));

    if (current.length === 0) currentContainer.innerHTML = '<p class="text-center text-muted">No active bookings. <a href="find-workers.html">Book a service now!</a></p>';
    if (history.length === 0) historyContainer.innerHTML = '<p class="text-center text-muted">No booking history.</p>';

    current.forEach(booking => currentContainer.appendChild(createBookingCard(booking, 'CUSTOMER')));
    history.forEach(booking => historyContainer.appendChild(createBookingCard(booking, 'CUSTOMER')));
}

function createBookingCard(booking, role) {
    const card = document.createElement('div');
    card.className = 'card border-0 shadow-sm rounded-3';

    // Determine displaying Name (Worker sees Customer, Customer sees Worker)
    const displayName = role === 'WORKER' ? booking.customer.fullName : booking.worker.user.fullName;
    const displayLabel = role === 'WORKER' ? 'Customer' : 'Worker';
    const date = new Date(booking.scheduledDate).toLocaleDateString();

    const statusColors = {
        'PENDING': 'bg-warning text-dark',
        'CONFIRMED': 'bg-primary text-white',
        'IN_PROGRESS': 'bg-info text-dark',
        'COMPLETED': 'bg-success text-white',
        'CANCELLED': 'bg-danger text-white'
    };

    card.innerHTML = `
        <div class="card-body d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div class="d-flex align-items-center gap-3">
                <div class="bg-light p-3 rounded-circle text-primary">
                    <i class="ph-fill ph-calendar-check fs-4"></i>
                </div>
                <div>
                    <h6 class="fw-bold mb-1">${booking.service}</h6>
                    <small class="text-muted d-block">${displayLabel}: ${displayName}</small>
                    <small class="text-muted d-block"><i class="ph ph-clock me-1"></i> ${date} at ${booking.scheduledTime}</small>
                </div>
            </div>
            <div class="d-flex align-items-center gap-3">
                <span class="badge rounded-pill ${statusColors[booking.status] || 'bg-secondary'}">${booking.status}</span>
                <span class="fw-bold">${booking.amount ? '₹' + booking.amount : 'Price TBD'}</span>
            </div>
        </div>
    `;

    // Add Action Buttons for Worker if Pending
    if (role === 'WORKER' && booking.status === 'PENDING') {
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'card-footer bg-white border-0 pt-0 d-flex gap-2 justify-content-end';
        actionsDiv.innerHTML = `
            <button class="btn btn-outline-danger btn-sm" onclick="updateBookingStatus('${booking.id}', 'CANCELLED')">
                Decline
            </button>
            <button class="btn btn-primary btn-sm" onclick="updateBookingStatus('${booking.id}', 'CONFIRMED')">
                Accept
            </button>
        `;
        card.appendChild(actionsDiv);
    }

    return card;
}

// Make globally available for onclick handlers
window.updateBookingStatus = async function (bookingId, status) {
    if (!confirm(`Are you sure you want to ${status === 'CONFIRMED' ? 'accept' : 'decline'} this booking?`)) return;

    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/bookings/${bookingId}/status`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                ...Auth.getAuthHeader()
            },
            body: JSON.stringify({ status })
        });

        const data = await response.json();

        if (data.success) {
            // refresh data
            loadWorkerData();
            // showToast is not globally available in this scope unless we import it or make it global in auth.js. 
            // auth.js defines showToast but doesn't export it globally.
            // Let's rely on alert for now or try to use a toast if available.
            alert(`Booking ${status.toLowerCase()} successfully`);
        } else {
            alert(data.message || 'Failed to update status');
        }
    } catch (error) {
        console.error('Error updating status:', error);
        alert('Error updating status');
    }
};
