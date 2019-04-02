// EJERCICIO 2

function sueldoNeto() {
	var sbrutoanual = Number(document.getElementById('number1').value);
	if (isNaN(sbrutoanual)) {alert("Por favor, introduce un valor numérico.");}
	else {
	var sbrutomes = sbrutoanual / 14;
	var irpfmes = (sbrutomes * 15) / 100;
	var segsocialmes = (sbrutomes * 6.4) / 100;
	var snetomes = sbrutomes - (irpfmes + segsocialmes);
	document.getElementById('etiqueta1').innerHTML =
		"Sueldo bruto anual: " + sbrutoanual.toFixed(2) + "€<br>" +
		"Sueldo bruto mensual: " + sbrutomes.toFixed(2) + "€<br>" +
		"Sueldo neto mensual: " + snetomes.toFixed(2) + "€<br>" +
		"Seguridad social: " + segsocialmes.toFixed(2) + "€<br>" +
		"IRPF: " + irpfmes.toFixed(2) + "€<br><br>";
	}
}

function precioFinal () {
	var precio = Number(document.getElementById('number2').value);
	if (isNaN(precio)) {alert("Por favor, introduce un valor numérico.");}
	else {
	var descuento = (precio * 20) / 100;
	var impuesto = (precio * 21) / 100;
	var preciofinal = precio + impuesto - descuento;
	document.getElementById('etiqueta2').innerHTML =
		"Precio: " + precio.toFixed(2) + "€<br>" +
		"Impuesto (21%): +" + impuesto.toFixed(2) + "€<br>" +		
		"Decuento (20%): -" + descuento.toFixed(2) + "€<br>" +
		"Precio final: " + preciofinal.toFixed(2)+ "€<br><br>";
	}
}

function tiempoDescarga () {
	var peso = Number(document.getElementById('number3').value);
	if (isNaN(peso)) {alert("Por favor, introduce un valor numérico.");}
	else {
	var nmbits = peso * 8; // megabits
	var velocidad = nmbits / 10; // megabits / sg
	document.getElementById('etiqueta3').innerHTML =
		"Tamaño del archivo: " + peso.toFixed(2) + " megabytes<br>" +
		"Velocidad: 10 mbps<br>" +
		"Tiepo de descarga del archivo: " + velocidad.toFixed(2) + " segundos<br><br>";
	}
}

function modosdeFrase () {
	var frase = document.getElementById('number4').value;
	var palabras1 = frase.split (" ");
	var palabras2 = palabras1.reverse();
	var fraseinvertida ="";
	var i = 0;
	for (i;i<palabras2.length;i++) {
		fraseinvertida += palabras2[i] + " ";
	}
	document.getElementById('etiqueta4').innerHTML =
		"\"" + frase + "\"<br>" + 
		"Mayúsculas: " + frase.toUpperCase() + "<br>" + 
		"Minúsculas: " + frase.toLowerCase() + "<br>" + 
		"Cita: " + fraseinvertida + "<br><br>";
}

function operarNumeros () {
	var num = document.getElementById('number5').value;
	var numeros = num.split (" ");
	numeros.sort(function(a, b){return a-b;});
	var suma = Number(numeros [0]) + Number(numeros [1]) +  Number(numeros [2]);
	if (numeros.length !== 3) {alert("Por favor, introduce tres numeros.");}
	else {
	document.getElementById('etiqueta5').innerHTML =
		"Números introducidos: " + num + "<br>" + 
		"Número menor: " + numeros[0] + "<br>" +
		"Número mayor: " + numeros[numeros.length-1] + "<br>" +		
		"Suma de los números: " + suma+ "<br><br>";
	}
}

function listaPalabras () {
	var frase = document.getElementById('number6').value;
	var palabras = frase.split (" ");
	if (palabras.length !== 3) {alert("Por favor, introduce tres palabras.");}
	else {
		palabras.sort();
		document.getElementById('etiqueta6').innerHTML =
		"Palabras ordenadas ascendentemente:<br>" + 
		"<ol><li>: " + palabras[0] + "</li>" +
		"<li>: " + palabras[1] + "</li>" +
		"<li>: " + palabras[2] + "</li></ol><br>";	

	}
}


