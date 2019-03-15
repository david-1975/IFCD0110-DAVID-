// JavaScript Document
//método length
function longitud(){
	var frase = prompt("pon una frase");
	var obtener = frase;
	var largo = obtener.length;
	alert("la logitud de cadena creada es: " + largo + " carácteres");
	}
//método posicion
function posicion(){
	var palabra = prompt("Escribe una palabra que contenga 5 caráscteres");
	var numero = prompt("Escribe un numero de 0 a 5");
	var obtener = palabra;
	var obtener2 = numero;
	var final = obtener.charAt(-1);
	alert('tu palabra ' + obtener + ' el número ' + obtener2 + ' que has elegido ');
}
//método indice
function indice(){
	var frase = prompt("Escribe una frase");
	var obtener = frase;
	var final = obtener.charCodeAt(0);
	alert("tu unicode es: " + final);
}
//método Unicode en caracteres.
function unicar(){
	var numero = prompt("Escribe un número");
	var obtener = numero;
	var final = String.fromCharCode(obtener);
	alert("tu Unicode en caracteres es: " +final);
}
//método cadena en mayúsculas.
function cadenamay(){
	var frase = prompt("Escribe una frase en minúsculas");
	var obtener = frase;
	var final = obtener.toUpperCase();
	alert("tu frase en MAYUSCULAS es: " + final);
}
//método cadena en minúsculas.
function cadenamin(){
	var frase = prompt("Escribe una frase en Mayúsculas");
	var obtener = frase;
	var final = obtener.toLowerCase();
	alert("tu frase en minúsculas es: " + final);
}
//método encadenar.
function encadenar(){
	var frase1 = prompt("Escribe Nombre");
	var frase2 = prompt("Escribe Apellido");
	var obtener = frase1 + " " + frase2;
	var final = obtener.concat();
	alert(final)
}
//método cadena/caracter especificado.en la última
function cadena_caracter(){
	var frase = prompt("Escribe frase");
	var palabra = prompt("¿pon una palabra que quieras y te dira si existe en la frase?");
	var final = frase.endsWith(palabra);
	alert('en tu frase: ' + frase + '¿existe la palabra?' + final);
}
//método devuelve posicion.si existe.
function devuelveposcion(){
	var frase = prompt("Escribe frase");
	var palabra = prompt("¿pon una palabra que quieras y te dira si existe en la frase?");
	var final = frase.includes(palabra);
	alert('en tu frase' + frase + '¿existe la palabra?' + final);
}
//primera posicion
function primera(){
	var palabra1 = prompt("Escribe palabra");
	var palabra2 = prompt("Escribe letra de esa palabra");
	var final = palabra1.indexOf(palabra2);
	alert('en tu palabra '+ palabra1 + ' esta en la posición: ' + final);
}
//última posición.
function ultima(){
	var palabra1 = prompt("Escribe palabra");
	var palabra2 = prompt("Escribe letra de esa palabra");
	var final = palabra1.lastIndexOf(palabra2);
	alert('en tu palabra '+ palabra1 + ' esta en la posición: ' + final);
}
//comparativa.
function comparar(){
	var palabra1 = prompt("Escribe una palabra");
	var palabra2 = prompt("Escribe otra palabra");
	var final = palabra1.localeCompare(palabra2);
	alert("-1 si es primera, 0 si son iguales, 1 si va detras" + final)
}
//cadena que coincida con expresión regular.
function expresion(){
	var frase = prompt("Escribe una frase");
	var cadena = prompt("introduce una cadena a buscar.");
	var exp =new RegExp(cadena, "gi");// gi para que encuentre mayusculas y minusculas.
	var resultado = frase.match(exp);
	alert("Tu expresion " + resultado);
}
//repite
function repite(){
	var palabra = prompt("Escribe palabra");
	var resultado = palabra.repeat(2);
	alert(resultado);
}
//remplazar
function remplazar(){
	var palabra1 = prompt("Escribe palabra");
	var palabra2 = prompt("dime otra palabra");
	var resultado = palabra1.replace(palabra1,palabra2);
	alert('Tu palabra ' + palabra1 + ' se cambia por: ' + resultado);
}
//buscar
function buscar(){
	var frase = prompt("Escribe correo electronico");
	var busqueda = frase.search(/@/);
	var punto = frase.search(/\./);
	//var arrobapunto = frase.search (/[?*@??*\.]/);
	if (busqueda === -1){
		alert("No has escrito el caracter @");
	} else if (punto === -1){
		alert("El caracter \".\" no ha sido encontrado");
	} else {alert ("encontrado")}
}
//extrae cadena por ejemplo para dividir dominio, nombre y extension. puede buscar tambien en negativo. -6,-4
function extraer(){
	var frase = prompt("Introduce correo electronico");
	var busqueda = frase.search(/@/);
	var punto = frase.search(/\./);
	var usuario = frase.slice(0,busqueda);
	var dominio = frase.slice(busqueda +1, punto);
	var extension = frase.slice(punto +1);
	alert("Tu correo es: " + frase + "\n" +
		  "Tu usuario es: " + usuario + "\n" +
		  "El dominio es: " + dominio + "\n" + 
		  "La extensión es: " + extension);
}
//divide matriz busca lo que esta dentro de los parentesis.
function divide(){
	var frase = prompt("Introduce frase y pon alguna entre comillas");
	var resultado = frase.split(" ");
	alert("Tu resultado encontrado es: " + resultado)
}
//comprueba si empieza por una cadena.
function empieza(){
	var frase = prompt("Introduce frase");
	var frase2 = prompt("Introduce palabra");
	var resultado = frase.startsWith(frase2);
	alert("estas buscando dentro de: " + frase + " esta palabra que empieza por: " + resultado);
}
//extraer partes de una cadena  busca solo positivo 4,5
function sw(){
	var frase = prompt("introduce frase");
	var posicion = prompt("1ª posición");
	var posicion2 = prompt("2ª posición");
	var resultado = frase.substr(posicion,posicion2);
	alert("Hemos encontrado de tu frase: " + frase + " las letras " + resultado)
}
//extraer partes de una cadena  (4,3 puede buscar de atras alante.)
function subst(){
	var frase = prompt("introduce frase");
	var posicion = prompt("1ª posición");
	var posicion2 = prompt("2ª posición");
	var resultado = frase.substring(posicion,posicion2);
	alert("Hemos encontrado de tu frase: " + frase + " las letras " + resultado)
}
//convierte en caracteres
function convertir(){
	var frase = prompt("pon letra");
	var resultado = frase.toString();
	alert(resultado)
}
// limpia los espacios en blanco de fuera de la frase.
function limpiar(){
	var frase = prompt("escribe frase y salta 2-3 saltos de espacio.");
	alert("Tu frase con espacios en blanco " + frase + " ya está corregido " + frase.trim())
}