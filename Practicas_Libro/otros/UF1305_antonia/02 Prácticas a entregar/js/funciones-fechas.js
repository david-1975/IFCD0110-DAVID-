function calcularEdad() {
	var fnac = new Date(document.getElementById("date1").value);
	var fhoy = new Date();
	var fcumpleanos = new Date(fhoy.getFullYear(),fnac.getMonth(),fnac.getDate());		
	var segundos = (fhoy - fnac) / 1000;
	var minutos = segundos / 60;
	var horas = minutos / 60;
	var dias = horas / 24;
	var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];		
	var edad = fhoy.getFullYear() - fnac.getFullYear();
	if (fcumpleanos>fhoy) {edad = edad - 1;}
	document.getElementById("etiqueta1").innerHTML = "<ul><li>Naciste el : " + fnac.getDate() + 
		" de " + meses[fnac.getMonth()] + " de " + fnac.getFullYear() + "</li>" + 
		"<li>Edad : " + parseInt(edad) + " años</li>" + 
		"<li>Dias vividos: " + parseInt(dias) + "</li>" + 
		"<li>Horas vividas: " + parseInt(horas) + "</li>" + 
		"<li>Minutos vividos: " + parseInt(minutos) + "</li></ul>";
}
function formatofecha (fecha) { //CONVIERTE UNA FECHA EN FORMATO TEXTO "DD/MM/AAAA"
	var d = fecha.getDate();
	var m = fecha.getMonth()+1;
	var a = fecha.getFullYear();
	if (d<10) {d = "0" + d;}
	if (m<10) {m = "0" + m;}
	return (d+"/"+m+"/"+a);
}

function obtenerFecha () {
	var dia = Number(document.getElementById("number2").value);
	var mes = Number(document.getElementById("number3").value);
	var anio = Number(document.getElementById("number4").value);
	var fecha = new Date(anio, mes-1, dia);
	var fhoy = new Date();
	var h = fhoy.getHours();
	var mn = fhoy.getMinutes();
	var s = fhoy.getSeconds();
	if (h<10) {h = "0" + h;}
	if (mn<10) {mn = "0" + mn;}
	if (s<10) {s = "0" + s;}
	document.getElementById("etiqueta2").innerHTML = "Fecha introducida: " + formatofecha(fecha) + " ,<br>Hora del sistema: " + h +  "/" + mn +  "/" + s;
}

function fechaLarga() {
	var fecha = new Date(document.getElementById("date3").value);
	var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];		
	var dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];	
	document.getElementById("etiqueta3").innerHTML = "Hoy es " + dias[fecha.getDay()] + 
		", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear();
}

function inicioSesion() {
	var usuario = document.getElementById("text4").value;
	var passw = document.getElementById("password4").value;
	var fecha = new Date();
	if (usuario === "") {
		alert ("Por favor, introduce usuario");}
	else if (passw === "") {
		alert ("Por favor, introduce password");} 
	else {
		document.getElementById("etiqueta4").innerHTML = "Hola " + usuario + 
		", has iniciado sesión el día " + formatofecha(fecha) + " a las " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
	}
}

function diasFaltan() {
	var fnac = new Date(document.getElementById("date5").value);
	if (isNaN(fnac)) {alert("Fecha erronea");}
	var fhoy = new Date();
	var fcumpleanos = new Date();
	if (fnac > fhoy) {
		alert("Fecha de nacimiento errónea");
	} else {
		fcumpleanos.setFullYear(fhoy.getFullYear());
		fcumpleanos.setMonth(fnac.getMonth());
		fcumpleanos.setDate(fnac.getDate());
		var mensaje = "";	
		var dias = (((((fcumpleanos - fhoy)/ 1000) / 60) / 60) / 24);
		if (dias===0) {
			mensaje = "Hoy es tu cumpleaños. ¡Felicidades!";
		} else if (dias < 0) {
			mensaje = "Han pasado " + Math.abs(dias) + " dias desde que fue tu cumpleaños.";
		} else {
			mensaje = "Faltan " + Math.round(Math.abs(dias)) + " dias para tu cumpleaños.";
		}
		document.getElementById("etiqueta5").innerHTML = mensaje;
	}
}
