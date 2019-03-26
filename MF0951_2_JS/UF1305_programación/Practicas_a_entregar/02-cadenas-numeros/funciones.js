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