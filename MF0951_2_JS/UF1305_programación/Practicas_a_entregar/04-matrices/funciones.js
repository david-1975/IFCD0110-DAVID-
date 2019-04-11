// JavaScript Document
//Ejercicio 1
function cadenas1(){
	var coches = document.getElementById("text1").value;
	
	var cadena = coches.split(",");
	var cadena = coches.split(" ");
	
	
	document.getElementById("etiqueta1").innerHTML = "<i><u>Representación de la matríz:</u> Grupo Volkswagen: " + cadena + ".</i>";
}
//Ejercicio 2
function cadena2(){
	var cochesold = new Array ("Seat"," Audi"," Skoda, ");
	var cochesnew = document.getElementById("text2").value;
	var cadena = cochesnew.split(",");
	 
	
	document.getElementById("etiqueta2").innerHTML = "<i><u>Representación de la matríz:</u> Grupo Volkswagen: " + cochesold + cadena[0] + ", " + cadena[1] + ", " + cadena[2] + ".</i>";
}
//Ejercicio 3
function cadena3(){
	var cochesold1 = new Array ("Seat"," Audi"," Skoda, ");
	var cochesold2 = new Array ("Volkswagen"," Bentley"," Bugatti ");
	var cochesnew = document.getElementById("text3").value;
	var cadena = cochesnew.split(",");
	 alert(cochesnew);
	
	document.getElementById("etiqueta3").innerHTML = "<i><u>Representación de la matríz:</u> Grupo Volkswagen: " + cadena[0] + ", " + cadena[1] + ", " + cadena[2] + ", " + cochesold1  + cochesold2 + ". </i>";
}
//Ejercicio 4
function cadena4(){
	var cochesold1 = new Array ("Seat "," Audi"," Skoda, ");
	var cochesold2 = new Array ("Volkswagen"," Bentley"," Bugatti ");
	var cochesold3 = new Array ("Ducati"," Lamborghini"," Porsche,");
	var cochesnew = document.getElementById("text4").value;
	var cadena = cochesnew.split(",");
	var intercalar = cochesold1.splice(1, 0,cadena);
	
	document.getElementById("etiqueta4").innerHTML = "<i><u>Representación de la matríz:</u> Grupo Volkswagen: " +  cochesold3 + intercalar + cochesold1 + cochesold2 + ". </i>";
}
//Ejercicio 5
function cadena5() {
	var numeros = document.getElementById("text5").value;
	var arrayOrig = numeros.split(",");
	
	var arrayAscd = numeros.split(",");
	arrayAscd.sort(function(a, b){return a - b});
	
	var arrayDesc = numeros.split(",");
	arrayDesc.sort(function(b, a){return a - b});
	
	var numAleatorio = Math.floor((Math.random() * 0123456789) + 0123456789);
	var numAltstring = numAleatorio.toString();
	var numAtcoma = numAltstring.split("");
	
	var longitud = arrayOrig.length;
	
  		
	document.getElementById("etiqueta5").innerHTML = "<i><u>Representación de la matríz:</u> Matriz original: " + arrayOrig + " Ascendente: " + arrayAscd +  " Descendente: " + arrayDesc + " Aleatorio: " + numAtcoma +  " Longitud: " + longitud + "</i>";
}
