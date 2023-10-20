
// Toggle de NavItems on small Screens
const burgerMenuToggle = document.getElementById("burgerMenuForSmallSize");
const close = document.getElementById("closeBurger");   
const menu = document.querySelector(".menu");

// Agrega un evento de clic al botón de hamburguesa
burgerMenuToggle.addEventListener("click", function () {
  // Alternar la clase "active" para mostrar u ocultar el menú
  menu.classList.toggle("active");

  // Ocultar el botón de hamburguesa y mostrar el botón de cierre
  burgerMenuToggle.style.display = "none";
  close.style.display = "block";
});

// Agrega un evento de clic al botón de cierre
close.addEventListener("click", function () {
  // Ocultar el menú y mostrar el botón de hamburguesa
  menu.classList.remove("active");
  burgerMenuToggle.style.display = "block";
  close.style.display = "none";
});
