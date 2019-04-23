// JavaScript Document
var usuario1 = {user:"juan", password:"1234", pin: 147};
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};

function login () {
	document.getElementById("divgrande").style.display = "block";
	document.getElementById("divpeq").style.display = "block";
}

function cerrar () {
	alert ("cerrando");
	document.getElementById("divgrande").style.display = "none";
	document.getElementById("divpeq").style.display = "none";
	document.getElementById("errorlogin").style.display = "none";
	document.getElementById("passw").disabled = false;
	document.getElementById("benviar").value = "Iniciar sesión";
	document.getElementById("pin").style.display = "none";
}

function recordarpsw() {
	document.getElementById("pin").style.display = "block";
	document.getElementById("passw").disabled = true;
	document.getElementById("benviar").value = "Enviar";
	document.getElementById("benviar").setAttribute("onclick","comprobarpin();");
}

function comprobarpin () {
	var usuario = document.getElementById("usuario").value;
	var pin = document.getElementById("pin").value;	
	if ((usuario == "") || (usuario == null)) {
		mensajeError ("faltacampousuario");
	} else if ((pin == "") || (pin == null)) {
		mensajeError ("faltacampopin");
	} else {
		var encontrado = false;
		var pasusuario = "";
		if ((usuario1.user == usuario) && (usuario1.pin == pin)) {
			encontrado = true; 
			pasusuario = usuario1.password;
		} else if ((usuario2.user == usuario) && (usuario2.pin == pin)) {
			encontrado = true; 
			pasusuario = usuario2.password;
		} else if ((usuario3.user == usuario) && (usuario3.pin == pin)) {
			encontrado = true; 
			pasusuario = usuario3.password;
		} 	
		if (encontrado == true) {		
			alert ("Password del usuario: " + pasusuario);
			document.getElementById("passw").disabled = false;
			document.getElementById("pin").style.display = "none";
			document.getElementById("benviar").value = "Iniciar sesión";
			document.getElementById("benviar").setAttribute("onclick","iniciarsesion();");
		} else {
			mensajeError ("pinerroneo");
		}		
	}
}

function iniciarsesion () {
	var usuario = document.getElementById("usuario").value;
	var pas = document.getElementById("passw").value;
	if ((usuario == "") || (usuario == null))  {
		mensajeError ("faltacampousuario");
	} else if ((pas == "") || (pas == null)) {
		mensajeError ("faltacampopassw");
	} else { 
		var encontrado;
		if (
		((usuario1.user === usuario) && (usuario1.password === pas)) || ((usuario2.user === usuario) && (usuario2.password === pas)) || ((usuario3.user === usuario) && (usuario3.password === pas))
		) {
			encontrado = true; 
		} else {
			encontrado = false;
		}
		
		if (encontrado === true) {
			alert ("Bienvenido " + usuario);
			cerrar ();
			
		} else {
			alert ("Usuario o password erroneos");
	//		mensajeError ("datoserroneos");
		}	
		// guardar cookie si recordar=checked
		if (document.getElementById("recordar").checked == true) {
			crearcookie(usuario);
		}
	}
}

function comprobarusuario () {
	var usuario = document.getElementById("usuario").value;
	if ((usuario == "") || (usuario == null))  {
		mensajeError ("faltacampousuario");
	} else if ((usuario1.user != usuario) && (usuario2.user != usuario) && (usuario3.user != usuario)) {
		mensajeError ("usuarionoexiste");
	}	
}

function crearcookie (us) {
	var fechaexp = new Date();
	fechaexp.setTime(fechaexp.getTime()+(28*24*60*60*1000));
	document.cookie = "uslog="+encodeURIComponent(us)+"; expires=" +  fechaexp.toUTCString()+"; path=/";
}

function mensajeError (er) {
	document.getElementById("errorlogin").style.display = "block";
	var mensaje = "";
	switch (er) {
		case "faltacampousuario":
			mensaje = "Falta indicar Usuario";
			break;
		case "usuarionoexiste":
			mensaje = "El Usuario no existe";
			break;				
		case "faltacampopassw":
			mensaje = "Falta indicar Password";
			break;	
		case "datoserroneos":
			mensaje = "El Usuario o la Password no son válidos";
			break;		
		case "faltacampopin":
			mensaje = "Falta indicar PIN";
			break;	
		case "pinerroneo":
			mensaje = "El Usuario y PIN no son válidos";
			break;					
	}
	document.getElementById("errorlogin").innerHTML = mensaje;
}

function activarpw() {
	if (document.getElementById("passw").type == "password") 
	{
		document.getElementById("passw").type = "text";
	} else {
		document.getElementById("passw").type = "password";
	}
}