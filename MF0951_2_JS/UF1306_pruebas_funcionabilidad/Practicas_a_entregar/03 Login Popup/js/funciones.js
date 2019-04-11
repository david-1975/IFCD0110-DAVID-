// JavaScript Document
//cierra con el aspa y en cerrar.
function cerrar(){
	document.getElementById("miModal").style.display="none";
}

//Abrir formulario
function abrir(){
	document.getElementById("miModal").style.display="block";
}

function sesion(){
	var usuario1 = {user:"juan", password:"1234", pin: 147};   //base de datos.
	var usuario2 = {user:"pedro", password:"4321", pin: 258};
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	
	var usuario = document.getElementById("nombre").value;  //localiza nombre escrito.
	
	if (usuario == usuario1.user ){
	alert(bien);}
		else {
		alert(fallo);}
	}