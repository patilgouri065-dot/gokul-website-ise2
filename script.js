// Gokul Dairy student demo: small, accessible front-end interactions.
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#visitorName").value.trim();
    formStatus.textContent = `Thanks, ${name}! This is a demo form, so your message was not sent or saved.`;
    contactForm.reset();
  });
}
