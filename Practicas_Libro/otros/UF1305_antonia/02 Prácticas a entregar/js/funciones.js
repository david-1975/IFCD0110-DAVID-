// EJERCICIO 1

function obtenerlitros() {
	var litros = Number(document.getElementById('number1').value);
	if (isNaN(litros)) {alert("Por favor, introduce un número");}
	else {
	var decilitros = litros*10;
	var centilitros = litros*100;
	var mililitros = litros*1000;
	document.getElementById('etiqueta1').innerHTML =
		"Número de litros " + litros + "<br>" +
		litros + " litros son " + decilitros + " decilitros <br>" +
		litros + " litros son " + centilitros + " centilitros <br>" +
		litros + " litros son " + mililitros + " mililitros <br>";
	}
}

function obtenerlongitud() {
	var km = Number(document.getElementById('number2').value);
	if (isNaN(km)) {alert("Por favor, introduce un número");}
	else {
	var metros = km * 10;
	var centimetros = km * 100;
	var milimetros = km * 1000;
	document.getElementById('etiqueta2').innerHTML =
		"Número de kilometros " + km + "<br>" +
		km + " kilometros son " + metros + " metros <br>" +
		km + " kilometros son " + centimetros + " centimetros <br>" +		
		km + " kilometros son " + milimetros + " milimetros <br>";
	}
}

function obtenerTiempo() {
	var dias = Number(document.getElementById('number3').value);
	if (isNaN(dias)) {alert("Por favor, introduce un número");}
	else {
	var horas = dias * 24;
	var minutos = horas * 60;
	var segundos = minutos * 60;
	document.getElementById('etiqueta3').innerHTML =
		"Número de días " + dias + "<br>" +
		dias + " días son " + horas + " horas <br>" +
		dias + " días son " + minutos + " minutos <br>" +		
		dias + " días son " + segundos + " segundos <br>";
	}
}

function obtenerTemperatura() {
	var grados = Number(document.getElementById('number4').value);
	if (isNaN(grados)) {alert("Por favor, introduce un número");}
	else {
	var gradosF = (grados * 1.8) + 32;
	var gradosK = grados + 273.15;		
	document.getElementById('etiqueta4').innerHTML =
		"Número de grados centígrados " + grados + "<br>" +
		grados + " ºC son " + gradosF.toFixed(2) + " grados fahrenheit <br>" +
		grados + " ºC son " + gradosK.toFixed(2) + " grados kelvin <br>";		
	}
}

function obtenerPeso() {
	var peso = Number(document.getElementById('number5').value);
	if (isNaN(peso)) {alert("Por favor, introduce un número");}
	else {
	var kilos = peso * 1000;
	var gramos = kilos * 1000;
	var miligramos = gramos * 1000;
	document.getElementById('etiqueta5').innerHTML =
		"Número de toneladas " + peso + "<br>" +
		peso + " toneladas son " + kilos + " kilogramos <br>" +
		peso + " toneladas son " + gramos + " gramos <br>" +		
		peso + " toneladas son " + miligramos + " miligramos <br>";
	}
}

function obtenerPesaje() {
	var peso = Number(document.getElementById('number6').value);
	if (isNaN(peso)) {alert("Por favor, introduce un número");}
	else {
	var onzas = peso * 35.274;
	var libras = peso * 2.2046;
	var piedras = peso * 0.1575;
	var quilates = peso	* 5000;
	document.getElementById('etiqueta6').innerHTML =
		"Número de kilogramos " + peso + "<br>" +
		peso + " kilogramos son " + onzas.toFixed(2) + " onzas <br>" +
		peso + " kilogramos son " + libras.toFixed(2) + " libras <br>" +		
		peso + " kilogramos son " + piedras.toFixed(2) + " piedras <br>" + 
		peso + " kilogramos son " + quilates + " quilates <br>";
	}
}

function obtenerDistancia() {
	var distancia = Number(document.getElementById('number7').value);
	if (isNaN(distancia)) {alert("Por favor, introduce un número");}
	else {
	var millas = distancia * 0.621371;
	var yardas = distancia * 1093.61;
	var pies = distancia * 3280.84;
	var pulgadas = distancia * 39370.1;
	document.getElementById('etiqueta7').innerHTML =
		"Número de kilometros " + distancia + "<br>" +
		distancia + " kilogramos son " + millas.toFixed(2) + " millas <br>" +
		distancia + " kilogramos son " + yardas.toFixed(2) + " yardas <br>" +		
		distancia + " kilogramos son " + pies.toFixed(2) + " pies <br>" + 
		distancia + " kilogramos son " + pulgadas.toFixed(2) + " pulgadas <br>";
	}
}

function obtenerMoneda() {
	var euros = Number(document.getElementById('number8').value);
	if (isNaN(euros)) {alert("Por favor, introduce un número");}
	else {
	var dolares = euros * 1.13;
	var libras = euros * 0.88;
	var yenes = euros * 128.27;
	var yuanes = euros * 7.85;
	document.getElementById('etiqueta8').innerHTML =
		"Número de euros " + euros + "<br>" +
		euros + " euros son " + dolares.toFixed(2) + " dolares <br>" +
		euros + " euros son " + libras.toFixed(2) + " libras <br>" +		
		euros + " euros son " + yenes.toFixed(2) + " yenes <br>" + 
		euros + " euros son " + yuanes.toFixed(2) + " yuanes <br>";
	}
}

function obtenerVelocidad() {
	var kilometros = Number(document.getElementById('number9').value);
	if (isNaN(kilometros)) {alert("Por favor, introduce un número");}
	else {
	var metrossg = kilometros * 0.277778;
	var millashora = kilometros * 0.621371;
	var nudos = kilometros * 0.539957;
	document.getElementById('etiqueta9').innerHTML =
		"Número de kilometros " + kilometros + "<br>" +
		kilometros + " kilometros son " + metrossg.toFixed(2) + " metros por segundo <br>" +
		kilometros + " kilometros son " + millashora.toFixed(2) + " millas por hora <br>" +		
		kilometros + " kilometros son " + nudos.toFixed(2) + " nudos <br>"; 
	}
}

function obtenerArea() {
	var kilometros = Number(document.getElementById('number10').value);
	if (isNaN(kilometros)) {alert("Por favor, introduce un número");}
	else {
	var hectareas = kilometros * 100;
	var acres = kilometros * 247.105;
	var millas = kilometros * 0.386102;
	document.getElementById('etiqueta10').innerHTML =
		"Número de kilometros " + kilometros + "<br>" +
		kilometros + " kilometros son " + hectareas.toFixed(2) + " hectareas <br>" +
		kilometros + " kilometros son " + acres.toFixed(2) + " acres <br>" +		
		kilometros + " kilometros son " + millas.toFixed(2) + " millas cuadradas <br>"; 
	}
}
