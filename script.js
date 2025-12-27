// DARK MODE TOGGLE
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save user preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
  }
});

let cart = [];

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.dataset.name;
    const productPrice = button.dataset.price;

    cart.push({
      name: productName,
      price: productPrice
    });

    button.innerText = "Added ✓";
    button.disabled = true;

    console.log("Cart:", cart);
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

