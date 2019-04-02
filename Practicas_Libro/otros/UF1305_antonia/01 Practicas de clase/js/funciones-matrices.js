// JavaScript Document
// Método new Array()
function matriz () {
	var color1 = prompt("Introduce el primer color");
	var color2 = prompt("Introduce el segundo color");
	var color3 = prompt("Introduce el tercer color");
	var colores = ("\"" + color1 + "\",\"" + color2 + "\",\"" + color3 + "\"");	
	var cadena = new Array(color1,color2,color3);
//	cadena = colores.split(","); con split se puede convertir un string en array
	alert ("Se ha creado la variable colores:\n " + "color1 = " + color1 +  "\n color2 = " + color2 +  "\n color3 = "+ color3 + "\ncolores: " + colores + "\n" + "Tipo de datos de colores: " + typeof(colores) + "\nSe ha creado un array: "+ cadena + "\n"+ "Tipo de datos de array: " + typeof(cadena)+"\nLongitud del array: " + cadena.length);
}
// Crear una matriz de un determino número de elementos
function crearmatriz(longitud) {
    var matriz = [];
	var i, elemento;
	for (i=0; i < longitud; i++) {
		elemento = prompt("Introduce el valor "+i+" para la matriz");
		matriz.push(elemento);
	}		
	return matriz;
}
// Método concat()
function concatenar () {
	var matriz1, matriz2, matrizres, numitems1, numitems2;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matriz1 = crearmatriz(numitems1);
	numitems2 = prompt("De cuantos elementos quieres crear el segundo array?");
	matriz2 = crearmatriz(numitems2);
	alert("Vamos a concatenar los 2 arrays");
	matrizres = matriz1.concat(matriz2);
	alert ("Se ha generado un array concatenado con el siguiente contenido: " + matrizres + "\n"+ "Tipo de datos del array: " + typeof(matrizres)+"\nLongitud del array: " + matrizres.length);
}
// Método toString()
function aString () {
	var matriz1, numitems1, cadena;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matriz1 = crearmatriz(numitems1);
	cadena = matriz1.toString();
	alert ("Se ha generado un array de : " + numitems1 + " elementos,\nCadena:" + matriz1 + "\nSe ha convertido a cadena: " + cadena + "\nTipo de datos de la cadena: " + typeof(cadena));		
}
// Método join()
function joinArray () {
	var matriz1, numitems1, cadena, separador;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matriz1 = crearmatriz(numitems1);
	separador = prompt("Vamos a convertir el array en cadena. Indica el separador que quieres utilizar para convertir en cadena");
	cadena = matriz1.join(separador);
	alert ("Se ha generado un array de : " + numitems1 + " elementos,\nCadena: [" + matriz1 + "]\nSe ha convertido a cadena: " + cadena + " usando el separador (" + separador + ")\nTipo de datos de la cadena: " + typeof(cadena));		
}
// Método push()
function pushArray () {
	var matriz1, numitems1, numitems2, cadena, i, elemento;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matriz1 = crearmatriz(numitems1);
	numitems2 = prompt("Cuantos elementos quieres añadir final del array?");
	for (i=0; i < numitems2; i++) {
		elemento = prompt("Introduce el valor "+i+" a añadir al array");
		matriz1.push(elemento);
	}	
	alert ("Se ha creado un array de " + numitems1 + " elementos.\nSe han añadido al final del array original " + numitems2 + " elementos.\nArray final con los elementos añadidos: [" + matriz1 + "]\nLongitud final del array: " + matriz1.length);		
}
// Método unshift()
function unshiftArray () {
	var matriz1, numitems1, numitems2, cadena, i, elemento;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matriz1 = crearmatriz(numitems1);
	numitems2 = prompt("Cuantos elementos quieres añadir al principio array?");
	for (i=0; i < numitems2; i++) {
		elemento = prompt("Introduce el valor "+i+" a añadir al array");
		matriz1.unshift(elemento);
	}	
	alert ("Se ha creado un array de " + numitems1 + " elementos.\nSe han añadido al principio del array original " + numitems2 + " elementos.\nArray final con los elementos añadidos: [" + matriz1 + "]\nLongitud final del array: " + matriz1.length);		
}
// Método pop()
function popArray () {
	var matriz1, matrizoriginal, numitems1, numitems2, i;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matriz1 = crearmatriz(numitems1);
	matrizoriginal = matriz1.slice();
	numitems2 = prompt("Cuantos elementos quieres eliminar del final del array?");
	for (i=0; i < numitems2; i++) {
		matriz1.pop();
	}	
	alert ("Se ha creado un array de " + numitems1 + " elementos.\nArray original: [" + matrizoriginal + "]\nSe han eliminado " + numitems2 + " elementos del final del array.\nArray final con los elementos eliminados: [" + matriz1 + "]\nLongitud final del array: " + matriz1.length);		
}
// Método shift()
function shiftArray () {
	var matriz1, matrizoriginal, numitems1, numitems2, i;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matriz1 = crearmatriz(numitems1);
	matrizoriginal = matriz1.slice();
	numitems2 = prompt("Cuantos elementos quieres eliminar del principio del array?");
	for (i=0; i < numitems2; i++) {
		matriz1.shift();
	}	
	alert ("Se ha creado un array de " + numitems1 + " elementos.\nArray original: [" + matrizoriginal + "]\nSe han eliminado " + numitems2 + " elementos del principio del array.\nArray final con los elementos eliminados: [" + matriz1 + "]\nLongitud final del array: " + matriz1.length);		
}
// Método slice()
function sliceArray () {
	var matriz1, matrizoriginal, numitems1, inicio, fin;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matrizoriginal = crearmatriz(numitems1);
	inicio = prompt("Posición inicial a extraer:");
	fin = prompt("Posición final a extraer:");	
	if ((fin>inicio) && (fin >= matrizoriginal.length-1)) {
		matriz1 = matrizoriginal.slice (inicio,fin);
		alert ("Se ha creado un array de " + numitems1 + " elementos.\nArray original: [" + matrizoriginal + "]\nSe han extraido " + (fin - inicio) + " elementos del array.\nArray final con los elementos extraidos: [" + matriz1 + "]\nLongitud del array copia: " + matriz1.length);}
	else if  (inicio==="" && fin==="") {
		matriz1 = matrizoriginal.slice ();
		alert ("Se ha creado un array de " + numitems1 + " elementos.\nArray original: [" + matrizoriginal + "]\nSe hecho una copia completa del array: [" + matriz1 + "]\nLongitud del array copia: " + matriz1.length);}
	else {alert ("Error en posiciones");}
}
// Método delete
function deleteItemArray () {
	var matriz1, matrizoriginal, numitems1, item;
	numitems1 = prompt("De cuantos elementos quieres crear el primer array?");
	matriz1 = crearmatriz(numitems1);
	matrizoriginal = matriz1.slice();
	item = prompt("Posición del elemento que quieres eliminar del array?");
	delete matriz1[item];
	alert ("Se ha creado un array de " + numitems1 + " elementos.\nArray original: [" + matrizoriginal + "]\nSe ha vaciado el item de la posición " + item + ".\nArray final con el elemento vaciado: [" + matriz1 + "]\nLongitud final del array: " + matriz1.length);		
}
// Método splice()
function spliceArray () {
	var matriz1, matrizoriginal, numitems1, numitems2, numitems3, inicio, i;
	numitems1 = prompt("De cuantos elementos quieres crear el array?");
	matriz1 = crearmatriz(numitems1);
	matrizoriginal = matriz1.slice();
	inicio = parseInt(prompt("Posición desde donde ejecutar la acción?"));
	numitems2 = parseInt(prompt("Cuantos elementos quieres eliminar?"));		
	numitems3 = parseInt(prompt("Cuantos elementos quieres añadir?"));	
	matriz1.splice(inicio,numitems2); //elimina los elementos
	if (numitems2 > 0) { //añade los elementos
			for (i=0;i<numitems3;i++) {
				variable = "var"+i;
				var variable="";
				variable = prompt("Introduce el item: "+i);
				matriz1.splice(inicio+i,0,variable);
			}
			alert ("Se ha creado un array de " + numitems1 + " elementos.\nArray original: [" + matrizoriginal + "]\nSe han eliminado " + numitems2 + " elementos desde la posición " + inicio + "\nSe han añadido " + numitems3 + " items, desde la posición " + inicio + "\nArray final: [" + matriz1 + "]\nLongitud del array final: " + matriz1.length);
	}	
}
// Método sort()
function sortArray (tipo) {
	var matriz1, matrizoriginal, numitems1;
	numitems1 = prompt("De cuantos elementos quieres crear el array?");
	matriz1 = crearmatriz(numitems1);
	matrizoriginal = matriz1.slice();
	if (tipo==="asc") {
		matriz1.sort();
		alert ("Se ha creado un array de " + numitems1 + " elementos.\nArray original: [" + matrizoriginal + "]\nMatriz ordenada alfabéticamente y con orden ascendente [" +  matriz1 + "]\n");
	} else if (tipo==="desc") {
		matriz1.reverse();
		alert ("Se ha creado un array de " + numitems1 + " elementos.\nArray original: [" + matrizoriginal + "]\nMatriz ordenada alfabéticamente y con orden descendente [" +  matriz1 + "]\n");		
	}
}