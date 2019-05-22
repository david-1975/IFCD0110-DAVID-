// JavaScript Document

function cerrar(){
	document.getElementById("micaja").style.display="none";
}



function funCookies(){
var verCookie =document.cookie;
var buscar = verCookie.search("nombre");
	//alert(buscar);
	if (buscar !=-1) {
		alert ("Bienvenido de nuevo a Gourmet de Catering");
	} else{
var nombre = "nombre";
var web = "Gourmet de catering";
var caduca ="expires";
var fecha = new Date ();
var fechaUTC = fecha.toDateString();
var horaUTC="12:00:00";
var cookies = nombre + "=" + web + ";" + caduca + "=" + fechaUTC + " " + horaUTC + " UTC; ";
		
		//var crearCookie = cookie;
document.cookie = cookies;
alert ("Bienvenido a Gourmet de Catering");
	}
	document.getElementById("micaja").style.display="none";
}
//var crearcookies ="nombre=Gourmet de catering; expires=Tue 09 Abr 2019 12:00:00 UTC;";

//Añadir cookie
//


