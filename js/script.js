document.getElementById("btn__registrar").addEventListener("click" , registrar);
document.getElementById("btn__iniciar-sesion").addEventListener("click" , iniciarSesion);




var formulario_login = document.querySelector(".formulario__login");
var formulario_registrar = document.querySelector(".formulario__registrar");
var contenedor_login_registrar = document.querySelector(".contenedor__login-registrar");
var caja_trasera_registrar = document.querySelector(".caja__trasera-registrar");
var caja_trasera_login = document.querySelector(".caja__trasera-login");



function registrar(){
    formulario_registrar.style.display= "block";
    contenedor_login_registrar.style.left= "410px";
    formulario_login.style = "none";
    caja_trasera_registrar.style.opacity= "0";
    caja_trasera_login.style.opacity= "1";

};

function iniciarSesion(){
    formulario_registrar.style.display= "none";
    contenedor_login_registrar.style.left= "10px";
    formulario_login.style = "block";
    caja_trasera_login.style.opacity= "0";

}