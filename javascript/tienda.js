const btnFiltro = document.querySelector(".btn-filter");
const sectBusqueda = document.querySelector(".contenedor-busqueda");

btnFiltro.addEventListener("click", () => {
  const isDisplayed = window.getComputedStyle(sectBusqueda).display === "block";
  sectBusqueda.style.display = isDisplayed ? "none" : "block";
  console.log(window.getComputedStyle(btnFiltro).display);
});

