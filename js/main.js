// Smooth Scrolling
document.querySelectorAll("[data-scroll]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile Menu
const toggleButton = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

toggleButton.addEventListener("click", () => {
  // Only run on mobile
  if (window.innerWidth >= 1024) return;

  const isOpen = toggleButton.getAttribute("aria-expanded") === "true";

  toggleButton.setAttribute("aria-expanded", String(!isOpen));

  if (isOpen) {
    // Close menu
    menu.classList.add("translate-y-[-100%]", "opacity-0");
    menu.classList.remove("translate-y-0", "opacity-100");
  } else {
    // Open menu
    menu.classList.remove("translate-y-[-100%]", "opacity-0");
    menu.classList.add("translate-y-0", "opacity-100");
  }
});
