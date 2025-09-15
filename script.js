// script.js
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Carousel simple logic
(function () {
  const track = document.getElementById("track");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  if (!track || !prev || !next) return;
  let index = 0;
  const step = 1;
  function update() {
    const item = document.querySelector(".ally");
    if (!item) return;
    const itemWidth = item.offsetWidth + 12;
    track.style.transform = `translateX(${-index * itemWidth}px)`;
  }
  next.addEventListener("click", () => {
    const visible = Math.floor(
      track.parentElement.offsetWidth /
        (document.querySelector(".ally").offsetWidth + 12)
    );
    const max = Math.max(0, track.children.length - visible);
    index = Math.min(index + step, max);
    update();
  });
  prev.addEventListener("click", () => {
    index = Math.max(0, index - step);
    update();
  });
  window.addEventListener("resize", () => {
    if (index > 0) update();
  });
})();

// Contact form (demo) - replace with real endpoint or email service
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");
    if (!name || !email || !subject || !message) {
      formMsg.style.display = "block";
      formMsg.style.background = "#ffe6e6";
      formMsg.textContent = "Por favor complete todos los campos.";
      return;
    }
    formMsg.style.display = "block";
    formMsg.style.background = "#e6ffef";
    formMsg.textContent =
      "Gracias, su mensaje ha sido enviado. Nos comunicaremos a la brevedad.";
    this.reset();
  });
}

// Privacy modal
const modalBack = document.getElementById("modalBack");
const privacyBtn = document.getElementById("privacyBtn");
const closeModal = document.getElementById("closeModal");
if (privacyBtn) {
  privacyBtn.addEventListener("click", () => {
    modalBack.style.display = "flex";
  });
}
if (closeModal) {
  closeModal.addEventListener("click", () => {
    modalBack.style.display = "none";
  });
}
if (modalBack) {
  modalBack.addEventListener("click", (e) => {
    if (e.target === modalBack) modalBack.style.display = "none";
  });
}

// Adjust main top spacing on load and resize
function setMainTop() {
  const headerHeight = document.querySelector("header").offsetHeight;
  document.querySelector("main").style.marginTop = headerHeight + 18 + "px";
}
setMainTop();
window.addEventListener("resize", setMainTop);

// Detecta cuando los títulos entran en pantalla
const titles = document.querySelectorAll("section h2, section h3");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
    }
  });
}, { threshold: 0.2 });

titles.forEach(title => {
  observer.observe(title);
});

// Menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
