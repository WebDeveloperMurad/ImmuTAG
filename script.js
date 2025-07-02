// Dark/Light Mode
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";
});

// Scroll Animation
const fades = document.querySelectorAll(".scroll-fade");
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2,
});

fades.forEach(el => appearOnScroll.observe(el));
