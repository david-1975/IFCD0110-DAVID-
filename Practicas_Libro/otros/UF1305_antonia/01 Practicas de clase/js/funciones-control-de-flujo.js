// JavaScript Document
function horaIf () {
	var fecha = new Date();
	var hora = fecha.getHours();
	var mensaje = "";
	if (hora>7 && hora<12) {mensaje="Buenos días";}
	if (hora>=12 && hora<19) {mensaje="Buenas tardes";}
	if (hora>=19) {mensaje="Buenas noches";}
	alert(mensaje);
}
function horaElse () {
	var fecha = new Date();
	var hora = fecha.getHours();
	var mensaje = "";
	if (hora<=20) {mensaje="Buenos días";}
	else {mensaje="Buenas noches";}
	alert(mensaje);
}
function horaElseIf () {
	var fecha = new Date();
	var hora = fecha.getHours();
	var mensaje = "";
	if (hora>7 && hora<12) {mensaje="Buenos días";}
	else if (hora>=12 && hora<19) {mensaje="Buenas tardes";}
	else {mensaje="Buenas noches";}
	alert(mensaje);
}

function switchCase () {
	var fecha = new Date();
	var dia = fecha.getDay();
	var mensaje = "";
	switch (dia) {
		case 0: mensaje="domingo";
		break;	
		case 1: mensaje="lunes";
		break;
		case 2: mensaje="martes";
		break;
		case 3: mensaje="miércoles";
		break;
		case 4: mensaje="jueves";
		break;
		case 5: mensaje="viernes";
		break;
		case 69: mensaje="sábado";
		break;	
	}
	alert("Hoy es " + mensaje);
}

function bucleFor2() {
	var nombre = prompt("Nombre:");
	var apellido1 = prompt("Apellido 1:");
	var apellido2 = prompt("Apellido 2:");
	var direccion = prompt("Dirección:");
	var ciudad = prompt("Ciudad");
	var i;
	var datos = new Array (nombre, apellido1, apellido2, direccion, ciudad);
	var mensaje = "Los datos que has introducido son:\n";
	for (i=0; i<datos.length; i++) {
		mensaje += datos[i]+"\n";
	}
	alert(mensaje);
}
function bucleFor() {
	var i,x;
	var datos = [];
	var titulos = ["Nombre","Apellido1","Apellido2","Dirección","Ciudad"];
	for (i=0; i<titulos.length; i++) { //crea un array
		x = prompt("Intruduce tu " + titulos[i]);
		datos.push (x);
	}	
	var mensaje = "Los datos que has introducido son:\n";
	for (i=0; i<datos.length; i++) { //saca los valores del array
		mensaje += titulos[i]+": "+ datos[i] + "\n";
	}
	alert(mensaje);
}

function mientrasWhile() {
	var i=1;
	var x = prompt("Introduce un número del 1 al 10: ");
	var resultado="";
	if (x<=0 || x>10) {alert ("El número introducido no es correcto");}
	else {
		while (i<=x) {
		resultado = resultado + "Numero: " + i + "\n";
		i++;
		}
		alert ("Los números del 1 al " + x + " son:\n"+ resultado);
	}	
}

function hacerMientrasDoWhile() {
	var i=1;
	var x = prompt("Introduce un número del 1 al 10: ");
	var resultado="";
	if (x<=0 || x>10) {alert ("El número introducido no es correcto");}
	else {
		do {
			resultado = resultado + "Numero: " + i + "\n";
			i++;}
		while (i<=x);
		alert ("Los números del 1 al " + x + " son:\n"+ resultado);
	}	
}

function romperBucle() {
	var dia = parseInt(prompt("Introduce tu dia de nacimiento: "));
	var mes = parseInt(prompt("Introduce tu mes de nacimiento: "));	
	var horoscopo;
	switch (mes) {
		case 1: 
			if (dia <= 19) {horoscopo = "Capricornio";}
			else {horoscopo="Acuario";}
			break;
		case 2:
			if (dia <= 18) {horoscopo = "Acuario";}
			else {horoscopo="Piscis";}
			break;			
		case 3:
			if (dia <= 20) {horoscopo = "Piscis";}
			else {horoscopo="Aries";}
			break;
		case 4:
			if (dia <= 20) {horoscopo = "Aries";}
			else {horoscopo="Tauro";}
			break;		
		case 5:
			if (dia <= 20) {horoscopo = "Tauro";}
			else {horoscopo="Géminis";}			
			break;					
		case 6:
			if (dia <= 21) {horoscopo = "Géminis";}
			else {horoscopo="Cáncer";}
			break;					
		case 7:
			if (dia <= 22) {horoscopo = "Cáncer";}
			else {horoscopo="Leo";}
			break;				
		case 8:
			if (dia <= 23) {horoscopo = "Leo";}
			else {horoscopo="Virgo";}
			break;					
		case 9:
			if (dia <= 20) {horoscopo = "Virgo";}
			else {horoscopo="Libra";}
			break;					
		case 10:
			if (dia <= 22) {horoscopo = "Libra";}
			else {horoscopo="Escorpio";}
			break;					
		case 11:
			if (dia <= 22) {horoscopo = "Escorpio";}
			else {horoscopo="Sagitario";}
			break;
		case 12:
			if (dia <= 22) {horoscopo = "Sagitario";}
			else {horoscopo="Capricornio";}
			break;			
	}
	alert ("Tu horóscopo es: " + horoscopo);
}

function continuarBucle() {
	var num1 = Number(prompt("Introduce un número de 1 a 10: "));
	if ((num1 <=0) || (num1 > 10)) {alert ("Número introducido erróneo"); return;}
	var num2 = Number(prompt("Introduce un segundo número de 11 a 20: "));	
	if ((num2 <=10) || (num1 > 20)) {alert ("Número introducido erróneo"); return;}	
	var num3 = Number(prompt("Introduce un número a excluir de la suma del " + num1 + " al " + num2 + ":"));
	if ((num3 <num1) || (num3 > num2)) {alert ("Número introducido erróneo"); return;}		
	var contador = num1;
	var suma = 0;	
	while (contador <= num2) {			
		if (contador===num3) {contador++; continue;}
		suma += contador;
		contador++;		
	}
//	lo mismo con for
//	for (contador; contador <= num2; contador++) {
//		if (contador===num3) {continue;}
//		suma += contador;
//	}	
	alert ("Suma de los números del " + num1 + " al " + num2 + " exceptuando el número: " + num3 + " es: " + suma);
}