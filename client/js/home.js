// Used from config.js: API_BASE_URL

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    checkAuthStatus();
    loadFeaturedWorkers();
});

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
    }
}

function checkAuthStatus() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const role = localStorage.getItem('userRole');

    const guestNav = document.getElementById('guestNav');
    const userNav = document.getElementById('userNav');
    const userNameDisplay = document.getElementById('userName');
    const userFullNameDisplay = document.getElementById('userFullName');
    const userEmailDisplay = document.getElementById('userEmail');
    const logoutBtn = document.getElementById('logoutBtn');
    const dashboardLink = document.getElementById('dashboardLink');

    if (token && user) {
        guestNav.classList.add('d-none');
        userNav.classList.remove('d-none');

        if (userNameDisplay) userNameDisplay.textContent = user.fullName.split(' ')[0];
        if (userFullNameDisplay) userFullNameDisplay.textContent = user.fullName;
        if (userEmailDisplay) userEmailDisplay.textContent = user.email;

        // Redirect 'WORKER' to dashboard if they land on index.html
        if (role && role.toUpperCase() === 'WORKER') {
            // Hide customer-specific UI elements to prevent flashing before redirect
            const findWorkersLink = document.querySelector('a[href="pages/find-workers.html"]');
            const heroCTA = document.getElementById('heroCTA');

            if (findWorkersLink) findWorkersLink.parentElement.style.display = 'none';
            if (heroCTA) heroCTA.style.display = 'none';

            window.location.href = 'pages/worker-dashboard.html';
            return;
        }

        // Set Dashboard Link
        if (dashboardLink) {
            dashboardLink.href = role === 'WORKER' ? 'pages/worker-dashboard.html' : 'pages/customer-dashboard.html';
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                logout();
            });
        }
    } else {
        guestNav.classList.remove('d-none');
        userNav.classList.add('d-none');
    }
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    window.location.reload();
}

async function loadFeaturedWorkers() {
    try {
        const response = await fetch(`${API_BASE_URL}/workers?limit=3`);
        const data = await response.json();

        if (data.success) {
            const container = document.getElementById('featuredWorkersList');
            if (!container) return;

            container.innerHTML = ''; // Clear loading state

            data.data.forEach(worker => {
                container.appendChild(createWorkerCard(worker));
            });
        }
    } catch (error) {
        console.error('Error loading featured workers:', error);
    }
}

function createWorkerCard(worker) {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    // ... (existing card creation logic from previous task, simplified for brevity here or imported)
    // For now, let's keep it simple as the user asked specifically about dashboards
    // Re-using the card logic would be ideal if shared.

    // Basic Card Construct
    col.innerHTML = `
        <div class="card worker-card border-0 shadow-sm h-100 rounded-4">
            <div class="card-body p-4 text-center">
                <div class="position-relative d-inline-block mb-3">
                    <img src="${worker.user.profilePicture || 'https://ui-avatars.com/api/?name=' + worker.user.fullName}" 
                         alt="${worker.user.fullName}" 
                         class="rounded-circle shadow-sm object-fit-cover" 
                         width="100" height="100">
                    <div class="position-absolute bottom-0 end-0 bg-success border border-2 border-white rounded-circle p-1"></div>
                </div>
                <h5 class="fw-bold mb-1">${worker.user.fullName}</h5>
                <p class="text-secondary small mb-3">${worker.skills.join(', ')}</p>
                <div class="d-flex justify-content-center gap-2 mb-4">
                    <span class="badge bg-warning text-dark"><i class="ph-fill ph-star me-1"></i>${worker.rating || 'New'}</span>
                    <span class="badge bg-primary bg-opacity-10 text-primary">Verified</span>
                </div>
                <button class="btn btn-outline-primary rounded-pill w-100" onclick="window.location.href='pages/find-workers.html'">View Profile</button>
            </div>
        </div>
    `;
    return col;
}
