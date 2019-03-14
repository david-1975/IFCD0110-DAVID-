// JavaScript Document

//método length

function longitud() {
	var frase = prompt ("pon una frase");
	var obtener = frase;
	var largo = obtener.length;
	alert ('la logitud de cadena creada es: ' +largo+ " carácteres");
	}
//método posicion
function posicion() {
	var palabra = prompt ("Escribe una palabra que contenga 5 caráscteres");
	var numero = prompt ('escribe un numero de 0 a 5');
	var obtener = palabra;
	var obtener2 = numero;
	var final = obtener.charAt(-1);
	alert ('tu palabra ' + obtener + ' el número ' + obtener2 + ' que has elegido ');
}
//método indice
function indice() {
	var frase = prompt ("Escribe una frase");
	var obtener = frase;
	var final = obtener.charCodeAt(0);
	alert ("tu unicode es: " + final);
}
//método Unicode en caracteres.
function unicar(){
	var numero = prompt ("Escribe un número");
	var obtener = numero;
	var final = String.fromCharCode(obtener);
	alert ("tu Unicode en caracteres es: " +final);
}
//método cadena en mayúsculas.
function cadenamay(){
	var frase = prompt ("Escribe una frase en minúsculas");
	var obtener = frase;
	var final = obtener.toUpperCase();
	alert ("tu frase en MAYUSCULAS es: " + final);
}
//método cadena en minúsculas.
function cadenamin(){
	var frase = prompt ("Escribe una frase en Mayúsculas");
	var obtener = frase;
	var final = obtener.toLowerCase();
	alert ("tu frase en minúsculas es: " + final);
}
//método encadenar.
function encadenar(){
	var frase1 = prompt ("Escribe Nombre");
	var frase2 = prompt ("Escribe Apellido");
	var obtener = frase1 + frase2;
	var final = obtener.concat();
	alert (final)
}
//método cadena/caracter especificado.en la última
function cadena_caracter(){
	var frase = prompt ("Escribe frase");
	var palabra = prompt ("¿pon una palabra que quieras y te dira si existe en la frase?");
	var final = frase.endsWith(palabra);
	alert ('en tu frase: ' + frase + '¿existe la palabra?' + final);
}
//método devuelve posicion.si existe.
function devuelveposcion(){
	var frase = prompt ("Escribe frase");
	var palabra = prompt ("¿pon una palabra que quieras y te dira si existe en la frase?");
	var final = frase.includes(palabra);
	alert ('en tu frase' + frase + '¿existe la palabra?' + final);
}
//primera posicion
function primera() {
	var palabra1 = prompt ("Escribe palabra");
	var palabra2 = prompt ("Escribe letra de esa palabra");
	var final = palabra1.indexOf(palabra2);
	alert ('en tu palabra '+ palabra1 + ' esta en la posición: ' + final);
}
//última posición.
function ultima(){
	var palabra1 = prompt ("Escribe palabra");
	var palabra2 = prompt ("Escribe letra de esa palabra");
	var final = palabra1.lastIndexOf(palabra2);
	alert ('en tu palabra '+ palabra1 + ' esta en la posición: ' + final);
}
//comparativa.
function comparar(){
	var palabra1 = prompt("Escribe una palabra");
	var palabra2 = prompt("Escribe otra palabra");
	var final = palabra1.localeCompare(palabra2);
	alert ("-1 si es primera, 0 si son iguales, 1 si va detras" + final)
}