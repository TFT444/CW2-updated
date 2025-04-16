<script>
// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true
});

// AOS Animations
AOS.init({ duration: 1200, once: true });

// Barba.js transitions
barba.init({
  transitions: [
    {
      name: 'fade',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.5
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.5
        });
      }
    }
  ]
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  themeIcon.classList.replace(isDark ? "ri-moon-fill" : "ri-sun-fill", isDark ? "ri-sun-fill" : "ri-moon-fill");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
</script>