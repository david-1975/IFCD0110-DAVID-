var coches = [];

function crearMatriz() {
	var texto = document.getElementById("text1").value;
	var coches = [];
	if (texto.search(" ")>=0) {
		coches = texto.split (" ");
	} else if (texto.search(",")>=0) {
		coches = texto.split (",");
	}
	var i;
	for (i=0 ; i<coches.length ; i++) {
		coches[i] = coches[i].trim();
	}
	//if (coches.length !== 3) {alert("Por favor, introduce tres coches.");}
//	else {
		document.getElementById('etiqueta1').innerHTML =
		"<i>Grupo Volkswagen: " + coches[0] + ", " + coches[1] + ", " + coches[2]+".</i><br><br>";	
	//}
}
function incluirElementosFinal() {
	var coches = ["Seat", "Audi", "Skoda"];
	var coches2 = [];
	var texto = document.getElementById("text2").value;
	if (texto.search(" ")>=0) {
		coches2 = texto.split (" ");
	} else if (texto.search(",")>=0) {
		coches2 = texto.split (",");
	}	
	var i;
	for (i=0 ; i<coches2.length ; i++) {
		coches.push(coches2[i].trim());
	}	
	document.getElementById('etiqueta2').innerHTML =
		"<i>Grupo Volkswagen: " + coches[0] + ", " + coches[1] + ", " + coches[2]+ ", " + coches[3] +
		", " + coches[4] + ", " + coches[5] + ".</i><br><br>";	
}

function incluirElementosPrincipio() {
	var coches = ["Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
	var coches2 = [];
	var texto = document.getElementById("text3").value;
	if (texto.search(" ")>=0) {
		coches2 = texto.split (" ");
	} else if (texto.search(",")>=0) {
		coches2 = texto.split (",");
	}	
	var i;
	for (i=0 ; i<coches2.length ; i++) {
		coches.unshift(coches2[i].trim());
	}	
	document.getElementById('etiqueta3').innerHTML =
		"<i>Grupo Volkswagen: " + coches[0] + ", " + coches[1] + ", " + coches[2]+ ", " + coches[3] +
		", " + coches[4] + ", " + coches[5] + ", " + coches[6] +", " + coches[7] +", " + coches[8] + ".</i><br><br>";	
}
function incluirElementosInterior () {
	var coches = ["Ducati", "Lamborghini", "Porsche","Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
	var coches2 = [];
	var texto = document.getElementById("text4").value;
	if (texto.search(" ")>=0) {
		coches2 = texto.split (" ");
	} else if (texto.search(",")>=0) {
		coches2 = texto.split (",");
	}
	var posicion = coches.indexOf("Seat");
	coches.splice(posicion+1,0,coches2[0],coches2[1]);
	document.getElementById('etiqueta4').innerHTML =
		"<i>Grupo Volkswagen: " + coches[0] + ", " + coches[1] + ", " + coches[2]+ ", " + coches[3] +
		", " + coches[4] + ", " + coches[5] + ", " + coches[6] + ", " + coches[7] + ", " + coches[8] +
		", " + coches[9] + ", " + coches[10] + ".</i><br><br>";	
}

function numeros () {
	var numeros = document.getElementById("text5").value.split(",");
	var longitud = numeros.length;
	var asc = numeros.slice();
	asc.sort (function(a, b){return a-b;});
	var desc = numeros.slice();
	desc.sort (function(a, b){return b-a;});
	var aleat = numeros.slice();
	aleat.sort (function(a, b){return 0.5 - Math.random();});
	document.getElementById('etiqueta5').innerHTML = "Matriz original: " + numeros + "<br>" +
		"Ascendente: " + asc + "<br>" +
		"Descendente: " + desc + "<br>" +
		"Aleatorio: " + aleat + "<br>" +
		"Longitud: " + longitud + "<br>";
}