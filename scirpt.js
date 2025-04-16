document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const toggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill");
  }

  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeIcon.classList.replace(
      isDark ? "ri-moon-fill" : "ri-sun-fill",
      isDark ? "ri-sun-fill" : "ri-moon-fill"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Cart functionality
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = button.dataset.price;
      const image = button.dataset.image;

      // Add to cart
      cart.push({ name, price, image });
      localStorage.setItem("cart", JSON.stringify(cart));

      // Update cart count
      if (cartCount) cartCount.textContent = cart.length;

      // Redirect to cart
      window.location.href = "cart.html";
    });
  });
});
