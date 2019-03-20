// JavaScript Document

//Crear Array
function matriz() {
var color1 = prompt("introduce un color");
var color2 = prompt("introduce otro color");
var color3 = prompt("introduce un color más");

var colores = 
	("\"" + color1 + "\"," + 
	 "\"" + color2 + "\"," +
	 "\"" + color3 + "\"");

var crearMatriz = new Array (colores);

alert ("Se han creado las variables: " + "\n" + "var color1 = " + color1 + ";\n" + "var color2 = " + color2  + ";\n" +  "var color3 = " + color3  + ";\n" + 
"Se ha creado la matríz colores" + "\n" +
"var colores = " + "[" + crearMatriz + "];" + "\n" + 
"La variable colores es de tipo: " + typeof(crearMatriz) + "\n" + crearMatriz.length);
	}
