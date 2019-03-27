// JavaScript Document
// Ejercicio 1
function paga() {
	var sueldo = Number(document.getElementById("number1").value);
	var pagas = sueldo / 14;
	var ssocial =  (pagas * 6.4) / 100;
	var irpf = (pagas * 15) / 100;
	var resultado = pagas - ssocial - irpf;
	
	document.getElementById('etiqueta1').innerHTML =
		" Salario bruto anual " + sueldo + "<br>" +
		" El sueldo mensual bruto es: " + pagas.toFixed(2) + "<br>" +
		" La retención de Seguridad social es: " + ssocial.toFixed(2) + "<br>" +
		" El retención de IRPF es: " + irpf.toFixed(2) + "<br>" +
		" El sueldo mensual neto es: " + resultado.toFixed(2);
}
//Ejercicio 2
function precio() {
	var calcular = Number(document.getElementById("number2").value);
	var descuento = (calcular *20) / 100;
	var impuesto =  (calcular *21) /100;
	var resultado = calcular - descuento + impuesto;
	
	document.getElementById('etiqueta2').innerHTML =
		" El precio es: " + calcular + "<br>" +
		" El descuento es: " + descuento + "<br>" +
		" El impuesto es: " + impuesto + "<br>" +
		" El precio final es: " + resultado;
}
//Ejercicio 3
function descarga(){
	var descargar = Number(document.getElementById("number3").value);
	var resultado = ((descargar*8) /10) / 60;
	
	document.getElementById('etiqueta3').innerHTML =
		" Tiempo de descarga en megabytes: " + descargar + "<br>" +
		" El resultado de la descarga es: " + resultado.toFixed(2);
	
}
//Ejercicio 4
function analisis(){
	var frase = (document.getElementById("number4").value);
	var comillas = "\""+frase+"\"";
	var mayusculas = frase.toUpperCase();
	var minusculas = frase.toLowerCase();
	var dividir = frase.split(" ");
	var invierte = dividir.reverse();
	
	
	document.getElementById('etiqueta4').innerHTML =
		" Frase entre comillas es: " + comillas + "<br>" +
		" Frase en minusculas es: " + minusculas + "<br>" + 
		" Frase en Mayusculas es: " + mayusculas + "<br>" + 
		" Frase al reves: " + " Cita:" + invierte + "<br>";
}

//Ejercicio 5
function comparativa(){
	var valor = (document.getElementById("number5").value);
	var posicion1 = valor.indexOf(" ");    //con este método localizo el primer número.
	var numero1 = valor.slice(0,posicion1);  //con este método localizo 
	var posicion3 = valor.lastIndexOf(" ");  //con este método localizo el último número.
	var numero3 = valor.slice(posicion3);  //con este método localizo el número del medio.
	var numero2 = valor.slice(posicion1,posicion3);  //con este método localizo el número del medio.
	var a = Number(numero1);
	var b = Number(numero2);
	var c = Number(numero3);
	var suma = (a+b+c);
	
		
	if (a>b && a>c){
		mensajemayor = "A es Mayor"	
	}
	else if (b>a && b>c){
		mensajemayor ="B es Mayor"
	}
	else {
		mensajemayor ="C es Mayor"
	}
	
	if (a<b && a<c){
		mensajemenor = "A es menor"	
	}
	else if (b<a && b<c){
		mensajemenor ="B es menor"
	}
	else {
		mensajemenor ="C es menor"
	}
	
	
	
	document.getElementById('etiqueta5').innerHTML =
	" Los valores introducidos son: " + valor + "<br>" +
	" El primer valor es: " + numero1 + "<br>" +
	" El segundo valor es: " + numero2 + "<br>" +
	" El tercer valor es: " + numero3 + "<br>" +
	" El valor: " + mensajemayor + "<br>" + 
	" El valor: " + mensajemenor + "<br>" + 
	" La suma total de " + numero1 + " + " + numero2 + " + " + numero3 + " es: " + "<ul><li>" + suma + "<ul>" + "<br>" + "<br>" + "<br>";
		
		
		
}