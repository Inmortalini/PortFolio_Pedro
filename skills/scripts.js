// Toggle de NavItems on small Screens
const burgerMenuToggle = document.getElementById("burgerMenuForSmallSize");

const close = document.getElementById("closeBurger");
const menu = document.querySelector(".menu");

// Agrega un evento de clic al botón de hamburguesa
burgerMenuToggle.addEventListener("click", function () {
  if (menu.classList.contains("active")) {
    // Si el menú ya está activo, lo ocultamos
    menu.classList.remove("active");
    close.style.display = "none";
    burgerMenuToggle.style.display = "block";
    setTimeout(() => {
      menu.style.visibility = "hidden";
    }, 30); // Esperamos a que termine la transición (0.3 segundos)
  } else {
    // Si el menú no está activo, lo mostramos
    menu.style.visibility = "visible";
    menu.classList.add("active");
    burgerMenuToggle.style.display = "none";
    close.style.display = "block";
  }
});

close.addEventListener("click", function () {
  // Cuando se hace clic en el botón de cierre, ocultamos el menú
  menu.classList.remove("active");
  close.style.display = "none";
  burgerMenuToggle.style.display = "block";
  setTimeout(() => {
    menu.style.visibility = "hidden";
  }, 300); // Esperamos a que termine la transición (0.3 segundos)
});

// Agrega un evento de clic al botón de cierre
close.addEventListener("click", function () {
  // Ocultar el menú y mostrar el botón de hamburguesa
  menu.classList.remove("active");
  burgerMenuToggle.style.display = "block";
  close.style.display = "none";
});
