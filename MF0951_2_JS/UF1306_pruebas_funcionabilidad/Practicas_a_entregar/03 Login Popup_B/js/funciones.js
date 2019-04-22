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

// guardar cookies
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

var h = document.cookie;
alert ("Las cookies son: " + h);