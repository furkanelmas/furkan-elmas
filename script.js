// ===== DOM Elements =====
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");
const navLinks = document.querySelectorAll(".nav-link");

// ===== Navbar Scroll Effect =====
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add scrolled class for shadow
  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Show/hide back to top button
  if (currentScroll > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }

  lastScroll = currentScroll;
});

// ===== Mobile Navigation Toggle =====
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "";
});

// ===== Close Mobile Menu on Link Click =====
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== Back to Top Button =====
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll("section[id]");

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.style.color = "var(--primary-color)";
        navLink.style.background = "rgba(37, 99, 235, 0.08)";
      } else {
        navLink.style.color = "";
        navLink.style.background = "";
      }
    }
  });
}

window.addEventListener("scroll", highlightNavigation);

// ===== Intersection Observer for Animations =====
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".timeline-item, .skill-category, .stat-item, .contact-item"
  )
  .forEach((el) => {
    observer.observe(el);
  });

// ===== Typing Effect for Hero (Optional Enhancement) =====
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  heroTitle.style.opacity = "1";
}

// ===== Prevent Flash of Unstyled Content =====
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// ===== Console Easter Egg =====
console.log("%c👋 Hello there!", "font-size: 24px; font-weight: bold;");
console.log(
  "%cInterested in my code? Check out my GitHub!",
  "font-size: 14px;"
);
console.log(
  "%chttps://github.com/furkanelmas",
  "font-size: 12px; color: #2563eb;"
);
