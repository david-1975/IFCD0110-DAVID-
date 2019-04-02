// JavaScript Document
// Para el botón de cerrar
function cerrar(){
	
  var dots = document.getElementById("contenedor");
//  var btnText = document.getElementById("boton1");

  if (dots.style.display === "none") {
    dots.style.display = "block";
/*    btnText.innerHTML = "Cerrar"; 
    moreText.style.display = "none";*/
  } else {
    dots.style.display = "none";
/*    btnText.innerHTML = "Ejecutar"; 
    moreText.style.display = "inline";*/
  }
}
//
function reloj () {
	var fecha = new Date();
	var anio = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var hora = fecha.getHours();
	var minuto = fecha.getMinutes();
	var segundo = fecha.getSeconds();
	var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];	
	var dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];	
	var diasemana = fecha.getDay();
	document.getElementById ("demo_anio").innerHTML = "Año: " + anio;
	if (mes<10) {document.getElementById ("demo_mes").innerHTML = "Mes: 0" + (mes+1);}
	else {document.getElementById ("demo_mes").innerHTML = "Mes: " + (mes+1);}
	if (dia<10) {dia = "0" + dia;}
	document.getElementById ("demo_dia").innerHTML = "Día: " + dia;
	if (hora<10) {hora = "0" + hora;}
	document.getElementById ("demo_hora").innerHTML = "Hora: " + hora;	
	if (minuto<10) {minuto = "0" + minuto;}
	document.getElementById ("demo_minuto").innerHTML = "Minuto: " + minuto;	
	if (segundo<10) {segundo = "0" + segundo;}
	document.getElementById ("demo_segundo").innerHTML = "Segundos: " + segundo;	
	document.getElementById ("fechalarga").innerHTML = "Hoy es " + dias[diasemana] + " " + dia + " de " + meses[mes] + " de " +  anio;	
	setTimeout(reloj,1000);
}


// Metodo new Date ()
function nuevaFecha () {
	var fecha = new Date();
	alert ("La fecha es:" + "\n" + fecha);
}
// Método getFullYear
function obtenerAnio () {
	var fecha = new Date ();
	var dato = fecha.getFullYear();
	alert ("El año es: " + dato);
}
// Método getMonth
function obtenerMes () {
	var fecha = new Date ();
	var dato = fecha.getMonth();
	alert ("El mes actual es: " + dato);
	
}
function obtenerDato (dato) {
	var fecha = new Date();
	var res;
	var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
	var dia = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
	switch (dato) {
		case "anio":
			res = fecha.getFullYear();
			alert ("El año actual es: " + res);
			break;
		case "mes":
			res = fecha.getMonth();
			alert ("El mes actual es: " + meses[res]);
			break;	
		case "diames":	
			res = fecha.getDate();
			alert ("El dia del mes es: " + res);
			break;	
		case "hora":	
			res = fecha.getHours();
			alert ("La hora actual es: " + res);
			break;	
		case "minuto":	
			res = fecha.getMinutes();
			alert ("El minuto actual es: " + res);
			break;	
		case "segundos":	
			res = fecha.getSeconds();
			alert ("El segundo actual es: " + res);
			break;	
		case "milisegundos":	
			res = fecha.getMilliseconds();
			alert ("El milisegundo actual es: " + res);
			break;			
		case "tiempototal":	
			res = fecha.getTime();
			alert ("El tiempo total desde el 1 de enero de 1970 en milisegundos es: " + res);
			break;	
		case "diasemana":	
			res = fecha.getDay();
			alert ("El dia de la semana es: " + dia[res]);
			break;		
		case "horaecmas5":	
			res = Date.now();
			alert ("El número de milisegundos desde el 1 de enero de 1970 en milisegundos es: " + res);
			break;
	}	
}