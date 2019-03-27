// JavaScript Document
// Ejercicio 1
function edad () {
	var fecha = new	Date(document.getElementById("number1").value);
	var anoUser = fecha.getFullYear();
	var anoActual = new Date().getFullYear();
	var resta = (anoActual - anoUser);
	var dias = day
	
	document.getElementById("etiqueta1").innerHTML = "Tu edad es: " + resta + " años ";
	
}