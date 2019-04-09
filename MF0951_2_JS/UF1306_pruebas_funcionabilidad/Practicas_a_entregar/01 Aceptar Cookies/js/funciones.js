// JavaScript Document

//function ocultar(){
//document.getElementById('cookies').style.display = 'none';
//}


//----------------------

//function setCookie(cname,cvalue,exdays) {
//  var d = new Date();
//  d.setTime(d.getTime() + (exdays*24*60*60*1000));
//  var expires = "expires=" + d.toGMTString();
//  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//}
//
//function getCookie(cname) {
//  var name = cname + "=";
//  var decodedCookie = decodeURIComponent(document.cookie);
//  var ca = decodedCookie.split(';');
//  for(var i = 0; i < ca.length; i++) {
//    var c = ca[i];
//    while (c.charAt(0) == ' ') {
//      c = c.substring(1);
//    }
//    if (c.indexOf(name) == 0) {
//      return c.substring(name.length, c.length);
//    }
//  }
//  return "";
//}
//
//function checkCookie() {
//  var user=getCookie("username");
//  if (user != "") {
//    alert("Welcome again " + user);
//  } else {
//     user = prompt("Please enter your name:","");
//     if (user != "" && user != null) {
//       setCookie("username", user, 30);
//     }
//  }
//	document.getElementById('cookies').style.display = 'none';
//}
//var info = document.cookie;
//alert(info);;

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
}
//var crearcookies ="nombre=Gourmet de catering; expires=Tue 09 Abr 2019 12:00:00 UTC;";

//Añadir cookie
//


