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
function irA() {
    window.history.go(-2);
}

// MENSAJES EMERGENTES
function alerta() {
window.alert("Esto es un mensaje de alerta");
}
function confirmar() { 
window.confirm("Esto es un mensaje de confirmación");
}
function introducir() {
window.prompt("A la espera de órdenes","introduzca su nombre");
}

// SICRONIZACIÓN
function myFunction() {
  var d = new Date();
  var time = d.toLocaleTimeString();
	alert("Hora Actual: " + time);
}

var myVar2;
function intervalo(){
  myVar2 = setInterval(myTimer, 3000);

function myTimer() {
  var d = new Date();
  var time = d.toLocaleTimeString();
	alert("Hora Actual: " + time);
}
}

function clearintervalo(){

	window.clearInterval(myVar2);
}


//INFORMACIÓN NAVEGADOR

function infoNavegador() {

// MOTOR NAVEGADOR
var motorNombre = navigator.appName;
if (motorNombre === "Netscape") {
	motorNombre = "Javascript";
	}
// NOMBRE NAVEGADOR
var navegador = window.navigator.appCodeName;	
// VERSION NAVEGADOR
var versionNav = window.navigator.appVersion;		
// VERSION NAVEGADOR
var propietario = "Google. Inc";	
//LENGUIAJE
var lenguaje = window.navigator.language;
//SISTEMA OPERATIVO
var sistemaOS = "";
	var agentUser = window.navigator.userAgent;
	if (agentUser.indexOf("(Windows)")){
		var sistemaOS = "Windows";
	}else if (agentUser.indexOf("(Apple)")){
		var sistemaOS = "Apple";
	}else if (agentUser.indexOf("(Linux)")){
		var sistemaOS = "Linux";
	}else if (agentUser.indexOf("(iPhone)")){
		var sistemaOS = "iPhone";	
	}else if (agentUser.indexOf("(ipod)")){
		var sistemaOS = "ipod";
	}else if (agentUser.indexOf("(iPad)")){
		var sistemaOS = "iPad";
	}else if (agentUser.indexOf("(Adroid)")){
		var sistemaOS = "Android";
	}else if (agentUser.indexOf("(otros)")){
		var sistemaOS = "otros";
	}


//PLATAFORMA
var plataforma = window.navigator.platform;
var agentUser = window.navigator.userAgent;
	
if ((agentUser.indexOf("Chrome") > -1) ||
	(agentUser.indexOf("Edge") > -1) ||
    (agentUser.indexOf("OPR") > -1) || 
	(agentUser.indexOf("Firefox") > -1)) {
	var indice7 = agentUser.lastIndexOf("Win64");
	var plataforma = agentUser.substr(indice7,5); 
	}
//	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
else if ((agentUser.indexOf("Safari") > -1) || 
         (agentUser.indexOf("Trident") > -1)|| 
		 (agentUser.indexOf("MSIE") > -1)) {
	var indice8 = agentUser.lastIndexOf("WOW64");
	var plataforma = "Win64"; 
	}
		
//NAVEGADOR ONLINE
var navegadorOnline = window.navigator.onLine;
	if (navegadorOnline === true) {
	var navegadorOnline = "Si";
	} else if (navegadorOnline === false) {
	var navegadorOnline = "No";	
	} else if (navegadorOnline === undefined) {
	var navegadorOnline = "Indefinido";	
	} else if (navegadorOnline === "") {
	var navegadorOnline = "Desconocido";	
	}
	
var javaActivo = window.navigator.javaEnabled();
	if (javaActivo === true) {
	var javaActivo = "Si";
	} else if (javaActivo === false) {
	var javaActivo = "No";	
	} else if (javaActivo === undefined) {
	var javaActivo = "Indefinido";	
	} else if (javaActivo === "") {
	var javaActivo = "Desconocido";	
	}	
	
var cookiesActivas = navigator.cookieEnabled;
	if (cookiesActivas === true) {
	var cookiesActivas = "Si";
	} else if (cookiesActivas === false) {
	var cookiesActivas = "No";	
	} else if (cookiesActivas === undefined) {
	var cookiesActivas = "Indefinido";	
	} else if (cookiesActivas === "") {
	var cookiesActivas = "Desconocido";	
	}	
	
var pluginsActivos = window.navigator.plugins.length;
var agenteUsuario = window.navigator.userAgent;

// MOSTRAR INFO NAVAGADOR
var txt = "";
txt += "<h3>Información Navegador</h3>";
//window.navigator.appName
txt += "<p><b>Motor Navegador: </b>" + motorNombre + "</p>";
//window.navigator.appCodeName
txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>";	
//window.navigator.appVersion
txt += "<p><b>Versión del Navegador: </b>" + versionNav + "</p>"; 
txt += "<p><b>Propietario: </b>" + propietario + "</p>"; 
//window.navigator.language;
txt += "<p><b>Lenguaje: </b>" + lenguaje + "</p>"; 
//window.navigator.language;
txt += "<p><b>Sistema Operativo: </b>" + sistemaOS + "</p>"; 
txt += "<p><b>Plataforma: </b>" + plataforma + "</p>"; 
//window.navigator.onLine
txt += "<p><b>Navegador Online: </b>" + navegadorOnline + "</p>"; //window.navigator.javaEnabled()
txt += "<p><b>Java Activo: </b>" + javaActivo + "</p>"; 
	//window.navigator.cookieEnabled
txt += "<p><b>Cookies Activas: </b>" + cookiesActivas + "</p>"; 
txt += "<p><b>Plugins Activos: </b>" + pluginsActivos + "</p>";
txt += "<p><b>User-Agent header: </b>" + agenteUsuario + "</p>";// UserAgent
	
	
document.getElementById("infoNav").innerHTML = txt;

}