function loginUsuario(){
    let formLogin = document.querySelector('#loginForm');
let usuario =  formLogin.querySelector('.user-name');
let contraseña = formLogin.querySelector('.passwordLogin');

if (usuario.value == 'admin' && contraseña.value == 'password'){
    window.location.href = "./admin/Home.html";
}else if (usuario.value == 'usuario' &&  contraseña.value== 'password'){
    localStorage.setItem('usuario',true);
    alert('Bienvenido de nuevo');
    window.location.href='index.html';
} else{
    
}
}

let btnLogin = document.querySelector('#btn-login');
btnLogin.addEventListener('click',loginUsuario);

var usuario = localStorage.getItem('usuario');
let login = document.getElementById('login');
let miCuenta = document.getElementById('mi-cuenta');

if (usuario !== null){
    login.style.display='none';
    miCuenta.style.display='block';
}else{
    miCuenta.style.display = 'none';
}
