// JavaScript Document
var usuario1 = {user:"juan", password:"1234", pin: 147}; 
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};

//cierra con el aspa y en cerrar.
function cerrar(){
	document.getElementById("miModal").style.display="none";
}

//Abrir formulario
function abrir(){
	document.getElementById("miModal").style.display="block";
}


//introduccir contraseña
function validateForm(){
	var usuario1 = {user:"juan", password:"1234", pin: 147};   //base de datos.
	var usuario2 = {user:"pedro", password:"4321", pin: 258};
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	
	var usuario = document.getElementById("nombre").value;  //localiza nombre escrito.
	var password = document.getElementById("contrasena").value;  //localiza nombre escrito.
	
	document.getElementById("etiqueta1").style.display="block";
	
	
	if (usuario.length === 0 || password.length === 0) {
		document.getElementById("etiqueta1").innerHTML = "Introduce nombre o contraseña";
		
	} 
		
	else if	(usuario == usuario1.user && password == usuario1.password){
			mensaje = "¡Bienvenido!";
			
	}
	else if (usuario == usuario2.user && password == usuario2.password){     
			mensaje = "¡Bienvenido!";
			
	}
	else if (usuario == usuario3.user && password == usuario3.password){     
			mensaje = "¡Bienvenido!";
			
	}
	
	else {
		document.getElementById("etiqueta1").innerHTML = "Usuario y contraseña incorrectos";
		
	}
	  alert (mensaje);
}

//mostrar contraseña
function mostrarPassword () {
  var campo = document.getElementById('password');
  if (campo.type === "password") {
    campo.type = "text";
  } else {
    campo.type = "password";
  }
}


//recuperar contraseña
function mostrarCampoPin() {
	//var user = document.getElementById('usuario').value;
	var pin = document.getElementById('pin').style.display;
	var label = document.getElementById('mensajesPin').style.display;
	//alert(pin);
	if (pin == "none"){
		document.getElementById('pin').style.display = "block";
		document.getElementById('password').style.display = "none";
		document.getElementById('contrasenya').innerHTML = "<b>PIN</b>";
		//alert("PIN visible");
	} else {
		document.getElementById('pin').style.display ="none";
		document.getElementById('password').style.display = "block";
		document.getElementById('contrasenya').innerHTML = "<b>Contraseña</b>";
		//alert("PIN no visible");
	}
	if (label == "none"){
		document.getElementById('mensajesPin').style.display = "block";
		document.getElementById('mensajesPass').style.display = "none";
		alert("Label visible");
	} else {
		document.getElementById('mensajesPin').style.display = "none";
		document.getElementById('mensajesPass').style.display = "block";
		//(alert("Label no visible");
	}
}

// guardar cookies
function funCookies() {
	
var verCookie = document.cookie;
var buscar = verCookie.search("nombre");
/*	alert(buscar);*/
if (buscar != -1) {
	alert ("Bienvenido de nuevo a tu tienda de confianza");
} else {
	
var nombre = "nombre";
var web = "Logo Jeans";
var caduca = "expires";
var fecha = new Date();
var fechaUTC = fecha.toDateString();
var horaUTC = "12:00:00";
var cookie = nombre + "=" + web + "; " + caduca + "=" + fechaUTC + " " +  horaUTC + " UTC; ";
//var crearCookie = "nombre=Gourmet au Catering; expires=Tue, 09 Abr 2019 12:00:00 UTC;";	

//AÑADIR COOKIE
var crearCookie = cookie;
document.cookie = crearCookie;
alert ("Bienvenido a Logo Jeans");
}

}	
