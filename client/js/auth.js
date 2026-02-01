/* ========================================
   Authentication JavaScript (Bootstrap Version)
   SkillVerify Portal
======================================== */

// API Base URL - change this in production
const API_BASE_URL = "http://localhost:3000/api";

document.addEventListener("DOMContentLoaded", () => {
  // Redirect if already logged in
  if (isLoggedIn()) {
    window.location.href = "../index.html";
    return;
  }
  initAuth();
});

function initAuth() {
  initThemeToggle();
  initRoleTabs();
  initPasswordToggle();
  initPasswordStrength();
  initFileUpload();
  initFormSteps();
  initFormValidation();
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
}

/* ========== Role Tabs ========== */
function initRoleTabs() {
  const roleTabs = document.querySelectorAll("[data-role]");
  const workerOnlyElements = document.querySelectorAll(".worker-only");

  roleTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const role = tab.dataset.role;

      // Update active state
      roleTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Show/hide worker-only elements
      workerOnlyElements.forEach((el) => {
        if (role === "worker") {
          el.classList.remove("d-none");
        } else {
          el.classList.add("d-none");
        }
      });
    });
  });
}

/* ========== Password Toggle ========== */
function initPasswordToggle() {
  // Single password toggle (login)
  const singleToggle = document.getElementById("passwordToggle");
  if (singleToggle) {
    singleToggle.addEventListener("click", () => {
      const input = document.getElementById("password");
      const icon = document.getElementById("passwordIcon");
      togglePasswordVisibility(input, icon);
    });
  }

  // Multiple password toggles (register)
  const toggleButtons = document.querySelectorAll(".password-toggle");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      const icon = btn.querySelector("i");
      togglePasswordVisibility(input, icon);
    });
  });
}

function togglePasswordVisibility(input, icon) {
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("ph-eye");
    icon.classList.add("ph-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("ph-eye-slash");
    icon.classList.add("ph-eye");
  }
}

/* ========== Password Strength ========== */
function initPasswordStrength() {
  const passwordInput = document.getElementById("password");
  const strengthBar = document.getElementById("strengthBar");
  const strengthText = document.getElementById("strengthText");
  const strengthContainer = document.getElementById("passwordStrength");

  if (!passwordInput || !strengthBar || !strengthContainer) return;

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    // Update progress bar
    strengthBar.style.width = strength.percent + "%";
    strengthBar.className = "progress-bar " + strength.colorClass;
    strengthText.textContent = strength.text;

    // Update container class
    strengthContainer.className =
      "d-flex align-items-center gap-3 mb-3 password-strength " +
      strength.level;
  });
}

function calculatePasswordStrength(password) {
  if (!password) {
    return { level: "", text: "Password strength", percent: 0, colorClass: "" };
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) {
    return {
      level: "weak",
      text: "Weak",
      percent: 25,
      colorClass: "bg-danger",
    };
  } else if (score <= 4) {
    return {
      level: "fair",
      text: "Fair",
      percent: 50,
      colorClass: "bg-warning",
    };
  } else if (score <= 5) {
    return { level: "good", text: "Good", percent: 75, colorClass: "bg-info" };
  } else {
    return {
      level: "strong",
      text: "Strong",
      percent: 100,
      colorClass: "bg-success",
    };
  }
}

/* ========== File Upload ========== */
function initFileUpload() {
  const fileInput = document.getElementById("profilePicture");
  const preview = document.getElementById("profilePreview");

  if (!fileInput || !preview) return;

  fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        showToast("Please select an image file", "danger");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        showToast("Image size should be less than 5MB", "danger");
        return;
      }

      try {
        // Compress and preview
        const compressedBase64 = await compressImage(file);
        preview.innerHTML = `<img src="${compressedBase64}" alt="Profile" class="rounded-circle" style="width: 64px; height: 64px; object-fit: cover;">`;
      } catch (error) {
        console.error("Image compression error:", error);
        showToast("Error processing image", "danger");
      }
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

/* ========== Form Steps ========== */
let currentStep = 1;
const TOTAL_STEPS = 2;

function initFormSteps() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!nextBtn) return;

  nextBtn.addEventListener("click", async () => {
    if (validateStep(currentStep)) {
      // Check email/phone availability on step 1
      if (currentStep === 1) {
        const canProceed = await checkEmailAndPhoneAvailability();
        if (!canProceed) return;
      }
      currentStep++;
      updateFormStep(currentStep);
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentStep--;
      updateFormStep(currentStep);
    });
  }
}

/**
 * Check if email and phone are available before proceeding
 */
async function checkEmailAndPhoneAvailability() {
  const email = document.getElementById("email")?.value?.trim();
  const phone = document.getElementById("phone")?.value?.trim();
  const nextBtn = document.getElementById("nextBtn");

  if (!email || !phone) return true;

  // Show loading state
  const originalText = nextBtn.innerHTML;
  nextBtn.innerHTML =
    '<span class="spinner-border spinner-border-sm me-1"></span> Checking...';
  nextBtn.disabled = true;

  try {
    // Check email
    const emailResponse = await fetch(`${API_BASE_URL}/auth/check-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const emailData = await emailResponse.json();

    if (emailData.exists) {
      const emailInput = document.getElementById("email");
      emailInput.classList.add("is-invalid");
      const emailError = document.getElementById("emailError");
      if (emailError)
        emailError.textContent = "This email is already registered";
      showToast(
        "Email already registered. Please use a different email or login.",
        "danger"
      );
      return false;
    }

    // Check phone
    const phoneResponse = await fetch(`${API_BASE_URL}/auth/check-phone`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    const phoneData = await phoneResponse.json();

    if (phoneData.exists) {
      const phoneInput = document.getElementById("phone");
      phoneInput.classList.add("is-invalid");
      const phoneError = document.getElementById("phoneError");
      if (phoneError)
        phoneError.textContent = "This phone number is already registered";
      showToast(
        "Phone number already registered. Please use a different number.",
        "danger"
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error checking availability:", error);
    // Allow proceeding if check fails (server will validate on submit)
    return true;
  } finally {
    nextBtn.innerHTML = originalText;
    nextBtn.disabled = false;
  }
}

function getActiveRole() {
  const activeTab = document.querySelector("[data-role].active");
  return activeTab ? activeTab.dataset.role : "customer";
}

function updateFormStep(step) {
  const steps = document.querySelectorAll(".form-step");
  const stepIndicators = document.querySelectorAll(".step");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");

  // Update form steps visibility
  steps.forEach((s, index) => {
    if (index + 1 === step) {
      s.classList.remove("d-none");
    } else {
      s.classList.add("d-none");
    }
  });

  // Update step indicators
  stepIndicators.forEach((indicator, index) => {
    const badge = indicator.querySelector(".badge");
    if (index + 1 <= step) {
      badge.classList.remove("bg-secondary");
      badge.classList.add("bg-primary");
    } else {
      badge.classList.remove("bg-primary");
      badge.classList.add("bg-secondary");
    }
  });

  // Update buttons
  if (prevBtn) {
    if (step === 1) {
      prevBtn.classList.add("d-none");
    } else {
      prevBtn.classList.remove("d-none");
    }
  }

  if (nextBtn && submitBtn) {
    if (step === TOTAL_STEPS) {
      nextBtn.classList.add("d-none");
      submitBtn.classList.remove("d-none");
    } else {
      nextBtn.classList.remove("d-none");
      submitBtn.classList.add("d-none");
    }
  }
}

function validateStep(step) {
  const currentStepEl = document.getElementById(`step${step}`);
  if (!currentStepEl) return true;

  const inputs = currentStepEl.querySelectorAll(
    "input[required]:not(.d-none), textarea[required]:not(.d-none), select[required]:not(.d-none)"
  );
  let isValid = true;

  inputs.forEach((input) => {
    if (!validateInput(input)) {
      isValid = false;
    }
  });

  // Password match validation on step 1
  if (step === 1) {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.classList.add("is-invalid");
      const error = document.getElementById("confirmPasswordError");
      if (error) error.textContent = "Passwords do not match";
      isValid = false;
    }
  }

  return isValid;
}

/* ========== Form Validation ========== */
function initFormValidation() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }

  // Real-time validation
  const inputs = document.querySelectorAll(".form-control, .form-select");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => validateInput(input));
    input.addEventListener("input", () => {
      input.classList.remove("is-invalid");
    });
  });
}

function validateInput(input) {
  const value = input.value.trim();
  const id = input.id;

  input.classList.remove("is-invalid");

  // Required check
  if (input.required && !value) {
    input.classList.add("is-invalid");
    return false;
  }

  // Email validation
  if (input.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      input.classList.add("is-invalid");
      return false;
    }
  }

  // Phone validation
  if (input.type === "tel" && value) {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(value)) {
      input.classList.add("is-invalid");
      return false;
    }
  }

  // Password validation
  if (id === "password" && value && value.length < 8) {
    input.classList.add("is-invalid");
    return false;
  }

  // PIN code validation
  if (id === "pincode" && value) {
    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(value)) {
      input.classList.add("is-invalid");
      return false;
    }
  }

  return true;
}

/* ========== Login Handler ========== */
async function handleLogin(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value;
  const role = getActiveRole();

  if (!validateInput(form.email) || !validateInput(form.password)) {
    return;
  }

  const loginBtn = document.getElementById("loginBtn");
  const btnText = loginBtn.querySelector(".btn-text");
  const spinner = document.getElementById("loginSpinner");

  btnText.textContent = "Signing in...";
  spinner.classList.remove("d-none");
  loginBtn.disabled = true;

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));

      showToast("Login successful!", "success");

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1000);
    } else {
      showToast(data.message || "Login failed", "danger");
    }
  } catch (error) {
    console.error("Login error:", error);
    showToast("Unable to connect to server. Please try again.", "danger");
  } finally {
    btnText.textContent = "Sign In";
    spinner.classList.add("d-none");
    loginBtn.disabled = false;
  }
}

/* ========== Register Handler ========== */
async function handleRegister(e) {
  e.preventDefault();

  const terms = document.getElementById("terms");
  if (!terms.checked) {
    showToast("Please accept the Terms of Service", "warning");
    return;
  }

  const form = e.target;
  const role = getActiveRole();

  const formData = {
    fullName: form.fullName.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    password: form.password.value,
    address: form.address?.value?.trim() || "",
    city: form.city?.value?.trim() || "",
    pincode: form.pincode?.value?.trim() || "",
    role: role,
  };

  // Include profile picture if uploaded
  const profilePreview = document.getElementById("profilePreview");
  if (
    profilePreview &&
    profilePreview.src &&
    !profilePreview.src.includes("ph-user")
  ) {
    formData.profilePicture = profilePreview.src;
  }

  if (role === "worker") {
    const skills = Array.from(
      form.querySelectorAll('input[name="skills"]:checked')
    ).map((cb) => cb.value);
    formData.skills = skills;
    formData.experience = form.experience?.value || "";
    formData.bio = form.bio?.value || "";
  }

  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector(".btn-text");
  const spinner = document.getElementById("submitSpinner");

  btnText.textContent = "Creating account...";
  spinner.classList.remove("d-none");
  submitBtn.disabled = true;

  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));

      showToast("Account created successfully!", "success");

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1000);
    } else {
      // Handle validation errors
      if (data.errors) {
        data.errors.forEach((err) => {
          showToast(err.message, "danger");
        });
      } else {
        showToast(data.message || "Registration failed", "danger");
      }
    }
  } catch (error) {
    console.error("Registration error:", error);
    showToast("Unable to connect to server. Please try again.", "danger");
  } finally {
    btnText.textContent = "Create Account";
    spinner.classList.add("d-none");
    submitBtn.disabled = false;
  }
}

/* ========== Auth Helper Functions ========== */

// Check if user is logged in
function isLoggedIn() {
  const token = localStorage.getItem("token");
  return !!token;
}

// Get current user
function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Logout user
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/client/pages/login.html";
}

// Get auth header for API calls
function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/* ========== Toast Notification (Bootstrap) ========== */
function showToast(message, type = "info") {
  // Create toast container if not exists
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

  const icons = {
    success: "ph-check-circle",
    danger: "ph-x-circle",
    warning: "ph-warning",
    info: "ph-info",
  };

  const toastHTML = `
    <div id="${toastId}" class="toast align-items-center text-white ${bgClass} border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="ph-fill ${icons[type]} fs-5"></i>
          ${message}
        </div>
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
