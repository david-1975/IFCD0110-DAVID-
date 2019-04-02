// JavaScript Document
//VENTANA 
// Ancho y alto de Pantalla total
function tamanoVentana() {
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var x = document.getElementById("infoVentana");
x.innerHTML = "La ventana del navegador es de ancho: " + w + "px, y de alto: " + h + "px.";
}

//PANTALLA
// Ancho y alto de Pantalla total
function pantalla() { 
document.getElementById("divBom").innerHTML = 	
"El ancho de la pantalla es: " + screen.width + ". " + "El alto de la pantalla es: " + screen.height;
}

// Ancho y Alto de la pantalla disponible
function pantallaDisponible() { 
document.getElementById("divBom").innerHTML = 
"El ancho de la pantalla disponible es: " + screen.availWidth  + ". " +  "El alto de la pantalla disponible es: " + screen.availHeight;
}

// Profundidad de colores y pixeles de la pantalla
function pantallaProfundidad() { 
document.getElementById("divBom").innerHTML = 
"La profundidad de color de la pantalla es: " + screen.colorDepth  + ". " +  "La profundidad de píxeles de la pantalla es: " + screen.pixelDepth;
}

// INFORMACIÓN DE LA URL DE LA PÁGINA WEB
function urlPagina() {
document.getElementById("infoPantalla").innerHTML =
"La localización de la página es " + window.location.href;
}
function dominioPagina() {
document.getElementById("infoPantalla").innerHTML =
"El dominio de la página es " + window.location.hostname;
}
function rutaPagina() {
document.getElementById("infoPantalla").innerHTML =
"La ruta de la página es " + window.location.pathname;
}
function protocoloPagina() {
document.getElementById("infoPantalla").innerHTML =
"El protocolo de la página es " + window.location.protocol;
}
function cargarPagina() {
document.getElementById("infoPantalla").innerHTML =
"El número de puerto es " + window.location.assign("https://www.wikipedia.org");
}
function puertoPagina() {
document.getElementById("infoPantalla").innerHTML =
"El número de puerto es " + window.location.port;
}

//HISTORY 
function irAtras() {
    window.history.back()
}
function irAdelante() {
    window.history.forward()
}

//Mensaje emergente
function alerta(){
	windows.alert("Esto es un mensaje de alerta");
}

function confirmar(){
	windows.confirm("Esto es un mensaje de confirmación");
}

function introducir(){
	windows.prompt("A la espera de órdenes","introduca su nombre");
}

