function OcultarSelect() {
    const cantidadSelect = document.getElementById('cmb-cantidad');
    const otraCantidadInput = document.getElementById('otra-cantidad');
  
    if (cantidadSelect.value == 'Otra') {
      otraCantidadInput.style.display = 'block';
      cantidadSelect.style.display = 'none';
    }
    console.log("Hola");
}