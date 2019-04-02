// JavaScript Document

// Método length
function longitud() {
	var nombre = prompt("Por favor, introduce tu nombre y apellidos");
	var largo = nombre.length;
	if (largo>0) {
		alert ("La longitud de tu nombre es de " + largo + " caracteres.");}
	else {	
		alert ("No has introducido tu nombre.");}
}
function caracterposicion() {
	var texto = prompt("Por favor, introduce un texto");
	var posicion = prompt("Introduce la posición que quieres recuperar");
	var largo = texto.length;
	if (posicion > largo-1) {
		alert ("No hay suficientes caracteres para la posición indicada");}
	else if (posicion<=0) {
		alert ("Posicion indicada incorrecta");}		
	else {alert("El caracter de la posición " + posicion + " es " + texto.charAt(posicion));}
}
function caractercode() {
	var texto = prompt("Por favor, introduce un texto");
	var posicion = prompt("Introduce la posición de la que quieres recuperar el código unicode");
	var largo = texto.length;
	if (posicion > largo-1) {
		alert ("No hay suficientes caracteres para la posición indicada");}
	else if (posicion<=0) {
		alert ("Posicion indicada incorrecta");}		
	else {alert("El caracter de la posición " + posicion + " es " + texto.charCodeAt(posicion));}
}
function codecaracter() {
	var caracterunicode1 = prompt("Introduce el 1er carácter unicode a convertir:");
	var caracterunicode2 = prompt("Introduce el 2º carácter unicode a convertir:");	
	alert("Los caraceres decodificados son: " + String.fromCharCode(caracterunicode1, caracterunicode2));
}
function mayusculas() {
	var texto = prompt("Introduce un texto para convertir a mayúsculas:");
	alert("El texto introducido en mayúsculas es: " + texto.toUpperCase());
}
function minusculas() {
	var texto = prompt("Introduce un texto para convertir a minúsculas:");
	alert("El texto introducido en mayúsculas es: " + texto.toLowerCase());
}
function concatenar() {
	var texto1 = prompt("Primer texto:");
	var texto2 = prompt("Segundo texto:");
	var texto3 = prompt("Tercer texto:");	
	var texto = texto1.concat(" ",texto2," ",texto3);
	alert("El texto introducido es: " + texto);
}
function terminaen() {
	var texto1 = prompt("Introduce un texto:");
	var texto2 = prompt("Introduce palabra:");	
	alert("¿El texto termina en " + texto2 + "? " + texto1.endsWith(texto2));
}
function cadenaincluida() {
	var texto1 = prompt("Introduce un texto:");
	var texto2 = prompt("Introduce palabra:");	
	alert("¿La palabra " + texto2 + " está incluida en el texto? " + texto1.includes(texto2));	
}
function posicionprim() {
	var texto1 = prompt("Introduce un texto:");
	var texto2 = prompt("Introduce palabra:");	
	alert("¿La palabra " + texto2 + " está en la posición inicial " + texto1.indexOf(texto2));		
}
function posicionfinal() {
	var texto1 = prompt("Introduce un texto:");
	var texto2 = prompt("Introduce palabra:");
	var posicion = prompt ("A partir de que posición comenzar la búsqueda?:");
	alert("¿La palabra " + texto2 + " está en la posición final " + texto1.lastIndexOf(texto2, posicion));			
}
function compararcadenas() {
	var texto1 = prompt("Introduce primera cadena de texto:");
	var texto2 = prompt("Introduce segunda cadena de texto:");
	var compara = texto1.localeCompare(texto2);
	if (compara===-1) {alert ("El primer texto está primero");}
	else if (compara===0) {alert ("Los textos son iguales");}		
	else {alert("El primer texto está después");}
}
function buscarcadenamatch() {
	var texto = prompt("Introduce primera cadena de texto:");
	//búsqueda en toda la cadena de texto (g) y no sensible a mayusculas/minusculas (i)
//	alert("Array resultante de la busqueda: " + texto.match(/[A-B,c]/gi));
	var cadena=prompt("Introduce cadena:");
	var resultado= new RegExp (cadena,'gi');
	alert("Array resultante de la busqueda: " + texto.match(resultado));
}
function repetircadena() {
	var texto = prompt("Introduce cadena de texto a repetir:");
	var repeticiones = prompt("Introduce el nº de repeticiones: ");
	alert("Texto repetido: " + texto.repeat(repeticiones) + " " + repeticiones + " veces.");
}
function reemplazarcadena() {
	var texto1 = prompt("Introduce cadena de texto:");
	var texto2 = prompt("Introduce cadena de texto a reemplazar:");
	var texto3 = prompt("Introduce cadena de texto final:");
	alert("Texto modificado: " + texto1.replace(texto2,texto3));
}
function buscarcadena() {
	var texto1 = prompt("Introduce cadena de texto:");
	var texto2 = prompt("Introduce texto a buscar:");
	alert("El texto: " + texto2 + " se encuentra en la posición: " + texto1.search(texto2));
}
function extraercadena() {
	var texto = prompt("Introduce cadena de texto:");
	var inicio = prompt("Desde la posición: ");
	var fin = prompt("Hasta la posición: ");
	alert("El texto final es: " + texto.slice(inicio,fin));
}
function extraercadena2() {
	var texto = prompt("Introduce tu correo electrónico:");
	var arroba = texto.search(/@/);
	var punto = texto.search (/\./);
	var usuario = texto.slice (0,arroba-1);
	var dominio = texto.slice (arroba+1,punto);
	var extension = texto.slice (punto+1, texto.length);
}
function separarcadena() {
	var texto1 = prompt("Introduce cadena de texto:");
	var separador = prompt("Introduce separador: ");
	var limite = prompt("Introduce posición desde: ");
	var resultado = texto1.split(separador,limite);
	alert("El texto final es: " + resultado);
}
function empiezaporcadena() {
	var texto1 = prompt("Introduce cadena de texto:");
	var texto2 = prompt("Introduce texto de inicio: ");
	var resultado = texto1.startsWith(texto2);
	alert(resultado);	
}
function extraecaracteres() {
	var texto1 = prompt("Introduce cadena de texto:");
	var inicio = prompt("Introduce posicion inicio: ");
	var longitud = prompt("Introduce longitud: ");
	var resultado = texto1.substr(inicio,longitud);
	alert(resultado);	
}
function extraesubstring() {
	var texto1 = prompt("Introduce cadena de texto:");
	var inicio = prompt("Desde la posición: ");
	var fin = prompt("Hasta la posición: ");
	alert("El texto final es: " + texto1.substring(inicio,fin));	
}
function convertirastring() {
	var texto = prompt("Introduce cadena de texto:");
	alert("El texto final es: " + texto.toString());	
}
function eliminarespacios() {
	var texto = prompt("Introduce cadena de texto:");
	if (texto=="") {alert ("No has introducido texto");}
	else {alert("El texto final sin espacios alrededor es: " + texto.trim());}
}