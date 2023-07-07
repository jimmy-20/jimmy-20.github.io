window.onload = preCarga;

//--------Foto perfil----------------//
const profileImage = document.getElementById("profileImage");

const profileImageButton = document.getElementById("profileImageButton");

const cameraModal = document.getElementById("cameraModal");

const cameraVideo = document.getElementById("cameraVideo");

const icono = document.querySelector(".profile-image i.fa-circle-user");

function openCameraModal() {
  cameraModal.style.display = "block";
  startCamera();
}

function startCamera() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      cameraVideo.srcObject = stream;
    })
    .catch(function (error) {
      alert("Error al acceder a la cámara: ", error);
    });
}

function capturePhoto() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = cameraVideo.videoWidth;
  canvas.height = cameraVideo.videoHeight;
  context.drawImage(cameraVideo, 0, 0, canvas.width, canvas.height);
  const photoURL = canvas.toDataURL();
  profileImage.style.display = "block";
  icono.style.display = "none";
  profileImage.src = photoURL;
  closeCameraModal();
}

function closeCameraModal() {
  cameraModal.style.display = "none";
  stopCamera();
}

function stopCamera() {
  const stream = cameraVideo.srcObject;
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });
  }
}

//Controlando el login

window.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById("login");
    var loginPopup = document.querySelector(".popup");
    var closeButton = document.querySelector(".icon-close");
    var loginForm = document.getElementById("loginForm");
    loginButton.addEventListener("click", function () {
      loginPopup.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      loginPopup.style.display = "none";
      resetFields();
    });
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      validateLoginForm();
  
      // Realizar lógica de inicio de sesión aquí
  
      // Después de la autenticación, puedes redirigir al usuario a otra página
      // o mostrar un mensaje de éxito/error dentro del popup.
    });
  });

  function resetFields() {
    profileImage.style.display = "none";
    icono.style.display = "block";
  }


const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
  resetFields();
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

