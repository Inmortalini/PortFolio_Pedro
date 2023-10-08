// Obtén una referencia al elemento de la imagen del botón de hamburguesa y al menú
const burgerMenuToggle = document.getElementById("burgerMenuForSmallSize");

const menu = document.querySelector(".menu");

// Agrega un evento de clic al botón de hamburguesa
burgerMenuToggle.addEventListener("click", function () {
  // Alternar la clase "active" para mostrar u ocultar el menú
  menu.classList.toggle("active");
});
