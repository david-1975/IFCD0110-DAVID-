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
//EJERCICIO 6
function obtenerPesaje() {
	var pesaje = Number(document.getElementById("number6").value);
	
	var piedras = pesaje * 0.1575;
	var libras = pesaje * 2.2046;
	var onzas = pesaje * 35.274 ;
	var kilates = pesaje * 5000;
	
	document.getElementById('etiqueta6').innerHTML =
		"El número de pesaje " + pesaje + "<br>" +
		pesaje + " Kg son " + piedras + " piedras " + "<br>" +
		pesaje + " Kg son " + libras + " libras " + "<br>" + 
		pesaje + " Kg son " + onzas + " onzas " + "<br>" +
		pesaje + " Kg son " + kilates + " kilates " ;
}
//EJERCICIO 7
function obtenerDistancia() {
	var km = Number(document.getElementById("number7").value);
	
	var millas = km * 0.621371;
	var yardas = km * 1093.61;
	var pies = km * 3280.84 ;
	var pulgadas = km * 39370.1;
	
	document.getElementById('etiqueta7').innerHTML =
		"El número de km/s " + km + "<br>" +
		km + " Km son " + millas + " millas " + "<br>" +
		km + " Km son " + yardas + " yardas " + "<br>" + 
		km + " Km son " + pies + " pies " + "<br>" +
		km + " Km son " + pulgadas + " pulgadas " ;
}
//EJERCICIO 8
function obtenerMoneda() {
	var moneda = Number(document.getElementById("number8").value);
	
	var dolares = moneda * 1.13;
	var libras = moneda * 0.88;
	var yenes = moneda * 128.27 ;
	var yuanes = moneda * 7.85;
	
	document.getElementById('etiqueta8').innerHTML =
		"La moneda de Euro " + moneda + "<br>" +
		moneda + " Euro son " + dolares + " dolares " + "<br>" +
		moneda + " Euro son " + libras + " libras " + "<br>" + 
		moneda + " Euro son " + yenes + " yenes " + "<br>" +
		moneda + " Euro son " + yuanes + " yuanes " ;
}
//EJERCICIO 9
function obtenerVelocidad() {
	var velocidad = Number(document.getElementById("number9").value);
	
	var millas = velocidad * 0.621371;
	var nudos = velocidad * 0.539957;
	var metros = velocidad * 0.277778 ;
	var pie = velocidad * 0.911344;
	
	document.getElementById('etiqueta9').innerHTML =
		"Los Kms por hora de: " + velocidad + "<br>" +
		velocidad + " Kilómetros por hora son " + millas + " millas por hora " + "<br>" +
		velocidad + " Kilómetros por hora son " + nudos + " nudos por hora " + "<br>" + 
		velocidad + " Kilómetros por hora son " + metros + " metros por segundo " + "<br>" +
		velocidad + " Kilómetros por hora son " + pie + " pies por segundo " ;
}
//EJERCICIO 10
function obtenerArea() {
	var area = Number(document.getElementById("number10").value);
	
	var hectareas = area * 100;
	var acres = area * 247.105;
	var cuadradas = area * 0.386102;
	
	
	document.getElementById('etiqueta10').innerHTML =
		"Los Km cuadrados de: " + area + "<br>" +
		area + " Km cuadrado son " + hectareas + " hectáreas " + "<br>" +
		area + " Km cuadrado son " + acres + " acres " + "<br>" + 
		area + " Km cuadrado son " + cuadradas + " millas cuadradas " + "<br>" ;
}