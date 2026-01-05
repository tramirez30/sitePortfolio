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

const menu = document.getElementById("mobile-menu");
const toggleBtn = document.getElementById("menu-toggle");

function openMenu() {
  menu.classList.remove("-translate-y-full");
  menu.classList.add("translate-y-0");
  toggleBtn.classList.add("menu-open");
  toggleBtn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  menu.classList.add("-translate-y-full");
  menu.classList.remove("translate-y-0");
  toggleBtn.classList.remove("menu-open");
  toggleBtn.setAttribute("aria-expanded", "false");
}

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = toggleBtn.classList.contains("menu-open");
  isOpen ? closeMenu() : openMenu();
});

// Click outside to close
document.addEventListener("click", (e) => {
  if (
    toggleBtn.classList.contains("menu-open") &&
    !menu.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    closeMenu();
  }
});

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
