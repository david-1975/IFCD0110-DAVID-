// JavaScript Document
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
