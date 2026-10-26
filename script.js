
const botonMenu = document.getElementById("boton-menu");
const navegacion = document.getElementById("navegacion");

botonMenu.addEventListener("click", function () {
  navegacion.classList.toggle("abierta");

  const menuAbierto = navegacion.classList.contains("abierta");

  botonMenu.setAttribute("aria-expanded", menuAbierto);
  botonMenu.setAttribute(
    "aria-label",
    menuAbierto ? "Cerrar menú" : "Abrir menú"
  );
});

const anio = document.getElementById("anio");

anio.textContent = new Date().getFullYear();
