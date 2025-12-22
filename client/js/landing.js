document.addEventListener("DOMContentLoaded", () => {
  initLanding();
});

function initLanding() {
  initThemeToggle();
  initNavbarScroll();
  initCounterAnimation();
  initScrollAnimations();
  initSmoothScroll();
  initAuthState();
}

/* ========== Theme Toggle ========== */
function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Get saved theme or detect system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  // Apply theme on page load
  applyTheme(currentTheme);

  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // Listen for system preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
}

function applyTheme(theme) {
  const themeIcon = document.getElementById("themeIcon");
  const html = document.documentElement;

  if (theme === "dark") {
    html.setAttribute("data-theme", "dark");
    if (themeIcon) {
      themeIcon.className = "ph ph-sun";
    }
  } else {
    html.removeAttribute("data-theme");
    if (themeIcon) {
      themeIcon.className = "ph ph-moon";
    }
  }

  // Update navbar class for dark mode
  updateNavbarTheme(theme);
}

function updateNavbarTheme(theme) {
  const navbar = document.getElementById("mainNavbar");
  if (!navbar) return;

  if (theme === "dark") {
    navbar.classList.remove("navbar-light", "bg-white");
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light", "bg-white");
  }
}

// Make functions available globally for auth pages
window.applyTheme = applyTheme;
window.initThemeToggle = initThemeToggle;

/* ========== Navbar Scroll Effect ========== */
function initNavbarScroll() {
  const navbar = document.getElementById("mainNavbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow");
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.classList.remove("shadow");
      navbar.style.backdropFilter = "none";
    }
  });
}

/* ========== Counter Animation ========== */
function initCounterAnimation() {
  const counters = document.querySelectorAll(".stat-number[data-count]");

  if (counters.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.count, 10);
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element, target) {
  const duration = 2000;
  const startTime = performance.now();
  const startValue = 0;

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(
      startValue + (target - startValue) * easeOutQuart
    );

    element.textContent = formatNumber(currentValue);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
  }
  return num.toString();
}

/* ========== Scroll Animations ========== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".service-card, .step-card, .card"
  );

  if (animatedElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.5s ease ${
      index * 0.1
    }s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

/* ========== Smooth Scroll ========== */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href === "#") return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navbar = document.getElementById("mainNavbar");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.getElementById("navbarContent");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });
}

/* ========== Auth State ========== */
function initAuthState() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const guestNav = document.getElementById("guestNav");
  const userNav = document.getElementById("userNav");

  if (token && user) {
    // Show logged-in view
    if (guestNav) guestNav.classList.add("d-none");
    if (userNav) {
      userNav.classList.remove("d-none");
      updateUserInfo(user);
    }

    // Setup logout button
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleLogout();
      });
    }

    // Setup profile picture upload
    initProfilePictureUpload(token);
  } else {
    // Show guest view
    if (guestNav) guestNav.classList.remove("d-none");
    if (userNav) userNav.classList.add("d-none");
  }
}

function updateUserInfo(user) {
  const userName = document.getElementById("userName");
  const userFullName = document.getElementById("userFullName");
  const userEmail = document.getElementById("userEmail");
  const userAvatar = document.getElementById("userAvatar");

  if (userName) {
    userName.textContent = user.fullName?.split(" ")[0] || user.name || "User";
  }
  if (userFullName) {
    userFullName.textContent = user.fullName || user.name || "User";
  }
  if (userEmail) {
    userEmail.textContent = user.email || "";
  }

  // Show profile picture or initials
  const profilePicture = user.profilePicture;
  const initials = (user.fullName || user.name || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (userAvatar) {
    if (profilePicture) {
      userAvatar.innerHTML = `<img src="${profilePicture}" alt="Profile" class="rounded-circle" style="width: 100%; height: 100%; object-fit: cover;">`;
    } else {
      userAvatar.innerHTML = `<span class="small fw-bold">${initials}</span>`;
    }
  }

  // Update dropdown avatar
  const dropdownAvatar = document.getElementById("dropdownAvatar");
  if (dropdownAvatar) {
    if (profilePicture) {
      dropdownAvatar.innerHTML = `<img src="${profilePicture}" alt="Profile" class="rounded-circle" style="width: 100%; height: 100%; object-fit: cover;">`;
    } else {
      dropdownAvatar.innerHTML = `<i class="ph-fill ph-user fs-4"></i>`;
    }
  }
}

/* ========== Profile Picture Upload ========== */
const API_BASE_URL = "http://localhost:3000/api";

function initProfilePictureUpload(token) {
  const changePhotoBtn = document.getElementById("changePhotoBtn");
  const profilePictureInput = document.getElementById("profilePictureInput");

  if (!changePhotoBtn || !profilePictureInput) return;

  changePhotoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    profilePictureInput.click();
  });

  profilePictureInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      showToast("Please select an image file", "danger");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast("Image must be less than 5MB", "danger");
      return;
    }

    showToast("Uploading image...", "info");

    try {
      // Compress and convert to base64
      const base64Image = await compressImage(file);

      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ profilePicture: base64Image }),
      });

      const data = await response.json();

      if (data.success) {
        // Update local storage with new user data
        localStorage.setItem("user", JSON.stringify(data.data));
        // Update UI
        updateUserInfo(data.data);
        showToast("Profile picture updated successfully!", "success");
      } else {
        showToast(data.message || "Failed to update profile picture", "danger");
      }
    } catch (error) {
      console.error("Profile picture upload error:", error);
      showToast("Error uploading profile picture", "danger");
    }
  });
}

/* ========== Image Compression ========== */
function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        // Calculate new dimensions
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = width * ratio;
          height = height * ratio;
        }

        // Create canvas and compress
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to base64 with compression
        const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
        resolve(compressedBase64);
      };

      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = e.target.result;
    };

    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

function handleLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  showToast("Logged out successfully", "success");
  setTimeout(() => {
    window.location.href = window.location.pathname.includes("/pages/")
      ? "../index.html"
      : "index.html";
  }, 500);
}

// Make handleLogout available globally
window.handleLogout = handleLogout;

/* ========== Toast Notification ========== */
function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container position-fixed bottom-0 end-0 p-3";
    document.body.appendChild(container);
  }

  const toastId = "toast-" + Date.now();
  const bgClass =
    {
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info",
    }[type] || "bg-info";

  const toastHTML = `
    <div id="${toastId}" class="toast align-items-center text-white ${bgClass} border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", toastHTML);

  const toastEl = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
  toast.show();

  toastEl.addEventListener("hidden.bs.toast", () => {
    toastEl.remove();
  });
}

window.showToast = showToast;
