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

var crearMatriz = new Array (color1, color2, color3);

alert ("Se han creado las variables: " + 
	   "\n" + "var color1 = " + color1 + 
	   ";\n" + "var color2 = " + color2  + 
	   ";\n" +  "var color3 = " + color3  + ";\n" + 
	   "Se ha creado la matríz colores" + "\n" +
	   "var colores = " + "[" + colores + "];" + "\n" + 
	   "La variable colores es de tipo: " + typeof(crearMatriz) 
	   + "\n" + "La matríz contiene " + crearMatriz.length + " valores.");
	}
//método split () dividir una cadena 
function dividir() {
	var valor1 = prompt("introduce una frase");
	var resultado = valor1.split("");
	alert (resultado);
}
//método concat() une matrices
function unir() {
	var valor1 = prompt("introduce una palabra");
	var valor2 = prompt("introduce una palabra");
	var resultado = valor1.concat(valor2);
	alert (resultado);
}
//método copyWithin() copia elemento matriz
function copiar() {
	var valor1 = prompt("introduce 1ª fruta");
	var valor2 = prompt("introduce 2ª fruta");
	var valor3 = prompt("introduce 3ª fruta");
	var guardar = [valor1,valor2,valor3];
	var repetir =prompt("¿qué valor repetir?")
	var resultado = guardar.copyWithin(repetir,0);
	alert (resultado);
	
}
//método entries() devuelve valor
function devuelve() {
	var valor1 = prompt("introduce 1 palabra");
	var valor2 = prompt("introduce 2 palabra");
	var valor3 = prompt("introduce 3 palabra");
	var guardar = [valor1,valor2,valor3];
	var resultado = guardar.entries();
	alert (resultado.next().value);
}
//método toString() Convierte una matriz a una cadena 
function matriz_cadena() {
	var valor1 = prompt("introduce 1 palabra");
	var valor2 = prompt("introduce 2 palabra");
	var valor3 = prompt("introduce 3 palabra");
	var guardar = [valor1,valor2,valor3];
	var resultado = guardar.toString();
	alert (resultado);
}
//método join() Convierte una matriz a una cadena 
function cadena() {
	var valor1 = prompt("introduce 1 palabra");
	var valor2 = prompt("introduce 2 palabra");
	var valor3 = prompt("introduce 3 palabra");
	var guardar = [valor1,valor2,valor3];
	var resultado = guardar.join("*");
	alert (resultado);
}
//método pop() Elimina el último elemento de una matriz 
function cadena() {
	var valor1 = prompt("introduce 1 palabra");
	var valor2 = prompt("introduce 2 palabra");
	var valor3 = prompt("introduce 3 palabra");
	var guardar = [valor1,valor2,valor3];
	var resultado = guardar.pop();
	alert ("El valor " + guardar + ";\n" + "machaca " + resultado);
}
//método push() Añade un nuevo elemento a una matriz (al final)
function completar() {
	var valor1 = prompt("introduce 1 palabra");
	var valor2 = prompt("introduce 2 palabra");
	var valor3 = prompt("introduce 3 palabra");
	var guardar = new Array(valor1,valor2,valor3);
	var texto1 = guardar.toString();
	var valor4 = prompt("otra palabra");
	var guardar2 = guardar.push(valor4);
	var resultado = valor4.toString();
	alert(texto1+"," + resultado);
}
//método shift() elimina el primer elemento.
function eliminar() {
	var valor1 = prompt("introduce 1 palabra");
	var valor2 = prompt("introduce 2 palabra");
	var valor3 = prompt("introduce 3 palabra");
	var guardarvalor = new Array(valor1,valor2,valor3);
	alert("los colores guardados son: " + guardarvalor + ";\n" + "valor quitador " + guardarvalor.shift());
}
//método unshift() Añade un nuevo elemento a una matriz (al principio)
function completarprincipio() {
	var valor1 = prompt("introduce 1 palabra");
	var valor2 = prompt("introduce 2 palabra");
	var valor3 = prompt("introduce 3 palabra");
	var guardar = new Array(valor1,valor2,valor3);
	var valor4 = prompt("introduce otra palabra");
	var texot1 = guardar.unshift(valor4);
	alert(guardar);
}
//método length() Ofrece una forma fácil de añadir un nuevo elemento a una matriz
function nuevoelemento() {
	var valor1 = prompt("introduce 1 palabra");
	var valor2 = prompt("introduce 2 palabra");
	var valor3 = prompt("introduce 3 palabra");
	var guardar = new Array(valor1,valor2,valor3);
	var valor4 = prompt("introduce otra palabra");
	var resultado =  guardar[guardar.length] = valor4;
	alert(guardar + resultado);
}