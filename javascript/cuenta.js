// Acceder al elemento de entrada de archivo y al área de arrastre
const fileInput = document.getElementById('file-input');
const dropArea = document.getElementById('drop-area');

// Escuchar el evento de cambio de archivo en el elemento de entrada
fileInput.addEventListener('change', function(e) {
    // Obtener el archivo seleccionado
    const file = e.target.files[0];

    // Mostrar la foto seleccionada en la página
    displayPhoto(file);
});

// Escuchar los eventos de arrastrar y soltar en el área de arrastre
dropArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', function(e) {
    e.preventDefault();
    dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', function(e) {
    e.preventDefault();
    dropArea.classList.remove('dragover');

    // Obtener el archivo soltado
    const file = e.dataTransfer.files[0];

    // Mostrar la foto soltada en la página
    displayPhoto(file);
});

// Función para mostrar la foto en la página
function displayPhoto(file) {
    // Verificar si el archivo es una imagen
    if (file && file.type.startsWith('image/')) {
        // Crear un objeto URL para el archivo
        const photoURL = URL.createObjectURL(file);

        // Mostrar la foto en la página
        const photo = document.getElementById('photo');
        photo.src = photoURL;

        let icon =  document.getElementById('icon-photo');
        icon.style.display='none';
        photo.style.display = 'block';
    }
}

function EliminarFoto(){
    let btnEliminar = document.getElementById('btn-eliminar');
    let icon =  document.getElementById('icon-photo');
    const photo = document.getElementById('photo');

    photo.src='';
    photo.style.display = 'none';
    icon.style.display='block';
}