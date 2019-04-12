// JavaScript Document
//cierra con el aspa y en cerrar.
function cerrar(){
	document.getElementById("miModal").style.display="none";
}

//Abrir formulario
function abrir(){
	document.getElementById("miModal").style.display="block";
}


//introduccir contraseña
function comprobar(){
	var usuario1 = {user:"juan", password:"1234", pin: 147};   //base de datos.
	var usuario2 = {user:"pedro", password:"4321", pin: 258};
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	
	var usuario = document.getElementById("nombre").value;  //localiza nombre escrito.
	
	var password = document.getElementById("contrasena").value;  //localiza nombre escrito.
	
	document.getElementById("etiqueta1").style.display="block";

	var mensaje;
	if (usuario.length === 0) {
			mensaje = "Introduce su nombre";
			alert(typeof(usuario.length));
			document.getElementById("etiqueta1").innerHTML = mensaje;

		} else {
			mensaje = "bien";
			alert(mensaje + usuario.length);
			document.getElementById("etiqueta1").innerHTML = mensaje;
		}


		
	
	if (usuario == usuario1.user && password == usuario1.password){
		mensaje = "Bienvenido"
	}
	else if (usuario == usuario2.user && password == usuario2.password){     
		mensaje = "Bienvenido"
	}
	else if (usuario == usuario3.user && password == usuario3.password){     
		mensaje = "Bienvenido"
	}
	else {
		
		document.getElementById("etiqueta1").innerHTML = "Usuario y contraseña incorrectos" ;
	}
	  
}
//recuperar contraseña
function recuperar(){
	var usuario1 = {user:"juan", password:"1234", pin: 147};   //base de datos.
	var usuario2 = {user:"pedro", password:"4321", pin: 258};
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	
	document.getElementById("contrasena1").style.display="none";
	document.getElementById("pin").style.display="block";
	
	document.getElementById("contrasena").style.display="none";
	document.getElementById("etiqueta2").style.display="block";
	document.getElementById("etiqueta1").style.display="block";
	document.getElementById("etiqueta1").innerHTML = "usuario y pin incorrectos" ;
	var pin = document.getElementById("etiqueta2").value;  //localiza nombre escrito.
	
	if (pin == usuario1.pin){
		mensaje = "usuario1.password"
		
	}
	else if (pin == usuario2.pin){     
		mensaje = "usuario2.password"
	}
	else if (pin == usuario3.pin){     
		mensaje = "usuario3.password"
	}
	else {
		mensaje ="Datos incorrectos"
		
		
	}
	alert(mensaje);
	  	//document.getElementById("etiqueta2").innerHTML = mensaje ;
		
}