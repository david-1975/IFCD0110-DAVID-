// JavaScript Document
function reloj(){
	var fecha = new Date();
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth()+1;
	var dia = fecha.getDate();
	var hora = fecha.getHours();
	var minuto = fecha.getMinutes();
	var segundo = fecha.getSeconds();
	var diasemana = fecha.getDay();
	
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];	
	
	document.getElementById("link1").innerHTML = "Año: " + ano;
		if (mes < 10){mes = "0" + mes;}
	document.getElementById("link2").innerHTML = "Mes: " + mes;
		if (dia < 10){dia = "0" + dia;}
	document.getElementById("link3").innerHTML = "Día: " + dia;
		if (hora < 10){hora = "0" + hora;}
	document.getElementById("link4").innerHTML = "Horas: " + hora;
		if (minuto < 10){minuto = "0" + minuto;}
	document.getElementById("link5").innerHTML = "Minutos: " + minuto;
		if (segundo < 10){segundo = "0" + segundo;}
	document.getElementById("link6").innerHTML = "Segundos: " + segundo;
	
	document.getElementById("fechalarga").innerHTML = "Hoy es " + dias[diasemana] + " " + dia + " de " + meses[fecha.getMonth()] + " de " + ano;
	
	setTimeout(reloj,1000);
}


//Método new Date()
function nuevaFecha() {
var fecha = new Date ();
alert ("la fecha es :" + "\n" + fecha);
}
//Método getFullYear()
function year() {
var fecha = new Date ();	
alert ("la fecha es :" + "\n" + fecha.getFullYear());
}
//Método getMonth()
function mes() {
var fecha = new Date();
var mes = fecha.getMonth();
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];	
alert ("El mes actual es :" + mes + "\n" + "Su nombre es" + meses[fecha.getMonth()]);
}
//Método getDate()
function dia() {
var fecha = new Date ();
var dia = fecha.getDate();
alert ("El día actual es :" + dia );
}
//Método getHours()
function horas() {
var fecha = new Date ();
var horas = fecha.getHours();
alert ("La Hora actual es :" + horas );
}
//Método getMinutes()
function minutos() {
var fecha = new Date ();
var minutos = fecha.getMinutes();
alert ("Los minutos actuales son :" + minutos );
}
//Método getSeconds()
function segundos() {
var fecha = new Date ();
var segundos = fecha.getSeconds();
alert ("Los segundos actuales son :" + segundos );
}
//Método getMilliseconds()
function milisegundos() {
var fecha = new Date ();
var milisegundos = fecha.getMilliseconds();
alert ("Los milisegundos actuales son :" + milisegundos );
}
// Método getTime()
function time() {
var fecha = new Date();
var tiempo = fecha.getTime();
alert ("Los minutos actuales son: " + tiempo);
}
// Método getDay()
function cogerDiaSemana() {
var fecha = new Date();
var diaSemana = fecha.getDay();
var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
alert ("El día de la semana actual es: " + diaSemana + "\n" + "Su nombre es " + dias[fecha.getDay()]);
}
