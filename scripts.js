// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar background change on scroll
const navbar = document.querySelector("header");
ScrollTrigger.create({
  start: "top -80",
  end: 99999,
  toggleClass: { className: "navbar-scrolled", targets: navbar },
});

// Hero section animations
gsap.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
});

gsap.from(".hero p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.8,
});

gsap.from(".hero .cta-button", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1.1,
});

// Product card animations
gsap.from(".product-card", {
  scrollTrigger: {
    trigger: ".products",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
});

// About section animation
gsap.from(".about h2, .about p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
});

// Contact form animation
gsap.from(".contact form", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
