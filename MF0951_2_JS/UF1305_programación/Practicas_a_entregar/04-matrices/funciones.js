// JavaScript Document
//Ejercicio 1
function cadenas1(){
	var coches = document.getElementById("text1").value;
	var remplazar = coches.replace(/ /g);/*(/\"/gi," ")*/
	var cadena = remplazar.split();
	alert(remplazar);
	alert(cadena);
	
	document.getElementById("etiqueta1").innerHTML = "<i><u>Representación de la matríz:</u> Grupo Volkswagen: " + cadena[0] + "," + cadena[1] + "," + cadena[2] + ".</i>";
}
//Ejercicio 2
function cadena2(){
	var cochesold = new Array ("Seat"," Audi"," Skoda, ");
	var cochesnew = document.getElementById("text2").value;
	var cadena = cochesnew.split(",");
	alert(typeof(cadena)+cadena); 
	
	document.getElementById("etiqueta2").innerHTML = "<i><u>Representación de la matríz:</u> Grupo Volkswagen: " + cochesold + cadena[0] + ", " + cadena[1] + ", " + cadena[2] + ".</i>";
}
//Ejercicio 3

//Ejercicio 4

//Ejercicio 5

