/**
 * Global Configuration and Auth Helpers
 * Shared across all pages to ensure consistency.
 */

const CONFIG = {
    API_BASE_URL: 'http://localhost:3000/api'
};

const Auth = {
    getToken: () => localStorage.getItem('token'),
    getUser: () => JSON.parse(localStorage.getItem('user') || 'null'),
    getRole: () => localStorage.getItem('userRole'),

    isLoggedIn: () => {
        return !!localStorage.getItem('token') && !!localStorage.getItem('user');
    },

    getAuthHeader: () => {
        const token = localStorage.getItem('token');
        return token ? { 'Authorization': `Bearer ${token}` } : {};
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userRole');
        localStorage.removeItem('theme'); // Optional: keep theme preference? usually better to keep.
        // Actually, let's keep theme.

        window.location.href = window.location.pathname.includes('/pages/') ? 'login.html' : 'pages/login.html';
    }
};

// Expose globally
window.CONFIG = CONFIG;
window.Auth = Auth;
