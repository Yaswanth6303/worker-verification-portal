/**
 * Shared theme initialization and toggle.
 * Applies saved theme on load and syncs navbar + icon. Use on all pages.
 */
(function () {
  function applyTheme(theme) {
    const html = document.documentElement;
    const themeIcon = document.getElementById("themeIcon");
    const navbar = document.getElementById("mainNavbar");

    if (theme === "dark") {
      html.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.className = "ph ph-sun";
      if (navbar) {
        navbar.classList.remove("navbar-light", "bg-white");
        navbar.classList.add("navbar-dark");
      }
    } else {
      html.removeAttribute("data-theme");
      if (themeIcon) themeIcon.className = "ph ph-moon";
      if (navbar) {
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light", "bg-white");
      }
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");
    applyTheme(theme);

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem("theme", next);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  } else {
    initTheme();
  }

  window.applyTheme = applyTheme;
})();
