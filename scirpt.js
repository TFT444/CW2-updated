document.addEventListener("DOMContentLoaded", () => {
  // DARK MODE TOGGLE
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

  // CART FUNCTIONALITY
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = button.dataset.price;
      const image = button.dataset.image;

      cart.push({ name, price, image });
      localStorage.setItem("cart", JSON.stringify(cart));

      if (cartCount) cartCount.textContent = cart.length;

      // Redirect to cart.html after adding
      window.location.href = "cart.html";
    });
  });
});
