// JavaScript Document
//EJERCICIO 1
function obtenerlitros() {
	var litros = Number(document.getElementById("number1").value);
	
	var decilitros = litros * 10;
	var centilitros = litros * 100;
	var mililitros = litros * 1000;
	
	document.getElementById('etiqueta1').innerHTML =
		"Número de litros " + litros + "<br>" +
		litros + " litros son " + decilitros + " decilitros " + "<br>" +
		litros + " litros son " + centilitros + " centilitros " + "<br>" + 
		litros + " litros son " + mililitros + " mililitros ";
}
//EJERCICIO 2
	function obtenerlongitud(){
	var kilometros = Number(document.getElementById("number2").value);
	var metros  = kilometros * 1000;
	var centimetros = kilometros * 100000;
	var milimetros = kilometros * 1000000;
		
	document.getElementById('etiqueta2').innerHTML =
		"Número de metros " + kilometros + "<br>" +
		kilometros + " kilometros son " + metros + " metros " + "<br>" +
		kilometros + " kilometros son " + centimetros + " centimetros " + "<br>" + 
		kilometros + " kilometros son " + milimetros + " milimetros ";	
}
//EJERCICIO 3
	function obtenerTiempo() {
	var tiempo = Number(document.getElementById("number3").value);
	var dia  = tiempo * 24;
	var hora = tiempo * 60;
	var minuto = tiempo * 60;
		
	document.getElementById('etiqueta3').innerHTML =
		"Número de horas " + tiempo + "<br>" +
		tiempo + " dia son " + dia + " horas " + "<br>" +
		tiempo + " hora son " + hora + " minutos " + "<br>" + 
		tiempo + " minuto son " + minuto + " segundos ";	
}

// EJERCICIO 4
function obtenerTemperatura() {
	var grados =
	Number(document.getElementById("number4").value);
	
	var fahrenheit = (grados * 1.8) + 32;
	var kelvin = grados + 273.15;
	
	document.getElementById("etiqueta4").innerHTML = 
		"Número de grados centígrados " + grados + "<br>" + 
		grados + " grados centigrados son: " + fahrenheit + " fahrenheit" + "<br>" +
		grados + " grado centigrados son: " + kelvin + " Kelvin";
}
//EJERCICIO 5
function obtenerPeso() {
	var peso = Number(document.getElementById("number5").value);
	
	var kilogramos = peso * 1000;
	var gramos = peso * 1000;
	var miligramos = peso * 1000;
	
	document.getElementById('etiqueta5').innerHTML =
		"Número de peso " + peso + "<br>" +
		peso + " Tonelada son " + kilogramos + " kilogramos " + "<br>" +
		peso + " Kilogramos son " + gramos + " gramos " + "<br>" + 
		peso + " Gramo son " + miligramos + " miligramos ";
}