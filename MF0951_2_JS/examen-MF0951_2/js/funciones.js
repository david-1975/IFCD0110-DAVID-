// JavaScript Document

//EJERCICIO 1
function ejercicio1(){
	//Nombre navegador
	var navegador;  
	var agenteUsuario1 = navigator.userAgent;
	if (agenteUsuario1.indexOf("Firefox") > -1){		
		navegador = "Firefox";
	}
	else if ((agenteUsuario1.indexOf("Opera") > -1) || (agenteUsuario1.indexOf("OPR") > -1)){
		navegador = "Opera";
	}
	else if ((agenteUsuario1.indexOf("Trident") > -1) || (agenteUsuario1.indexOf("MSIE") > -1)){
		navegador = "I.Explorer";
	}
	else if (agenteUsuario1.indexOf("Edge") > -1){		
		navegador = "Edge";
	}		
	else if ((agenteUsuario1.indexOf("Chrome") > -1) && (agenteUsuario1.indexOf("Safari") > -1)){		
		navegador = "Chrome";
	}
	else if (agenteUsuario1.indexOf("Safari") > -1){		
		navegador = "Safari";
	}
	else { navegador = "desconocido";}
	//Propietario
	var propietario;	
	if (agenteUsuario1.indexOf("Firefox") > -1){		
		propietario = "Fundación Mozilla";
	}
	else if ((agenteUsuario1.indexOf("Opera") > -1) || (agenteUsuario1.indexOf("OPR") > -1)){
		propietario = "Opera Software";
	}
	else if ((agenteUsuario1.indexOf("Trident") > -1) || (agenteUsuario1.indexOf("MSIE") > -1)){
		propietario = "Microsoft Corporation";
	}
	else if (agenteUsuario1.indexOf("Edge") > -1){		
		propietario = "Microsoft Corporation";
	}		
	else if ((agenteUsuario1.indexOf("Chrome") > -1) && (agenteUsuario1.indexOf("Safari") > -1)){		
		propietario = "Google, Inc.";
	}
	else if (agenteUsuario1.indexOf("Safari") > -1){		
		propietario = "Apple Computer, Inc.";
	}
	else { propietario = "desconocido";}
	//resultado ejercicio
	document.getElementById("etiqueta1").innerHTML= "El navegador es "  + navegador +  ", y el propietario es " + propietario;
}
//EJERCICIO 2
function ejercicio2(){
		var fecha = new Date(document.getElementById("date2").value); 
		var ano = fecha.getFullYear();
		var dia = fecha.getDate();		
		var diaSemana = fecha.getDay();
		//generamos array 
		var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
		
		document.getElementById("etiqueta2").innerHTML = "<strong>" + dias[diaSemana] + ", " + dia + 
			" de " +	meses[fecha.getMonth()] + " del año " + ano + "</strong>";
	  }

//EJERCICIO 3
function ejercicio3(){
	if (document.getElementById("textfield1").value != "") {		
		var palabras = document.getElementById("textfield1").value;
		var sinespaciosaloslados = palabras.trim();		//Eliminar espacios
		var sincomas = sinespaciosaloslados.replace(/,/g, " ");	//Eliminar las comas 

		var busqueda1 = sincomas.indexOf(" ");  //Buscar primer espacio
		var busqueda2 = sincomas.lastIndexOf(" ");		//Buscar último espacio

		var a = sincomas.slice(0, busqueda1);		
		var b = sincomas.slice(busqueda1 +1, busqueda2);
		var c = sincomas.slice(busqueda2+1);
		document.getElementById("etiqueta3").innerHTML= "<strong><ul><li>" + a + "</li><li>" + b + "</li><li>" + c + "</li></ul></strong>";
	}
	   else{
		   document.getElementById("etiqueta3").innerHTML= "introduce 3 frutas";
		   document.getElementById("etiqueta3").style.color = "red";
	   }
	}	
//EJERCICIO 4
function ejercicio4(){
		var fecha = new Date(document.getElementById("date3").value); 
		var ano = fecha.getFullYear();
		var mes = fecha.getMonth();
		var dia = fecha.getDate();
		
		var fechaSistema = new Date(); 
		var hora = fechaSistema.getHours();
		var minuto = fechaSistema.getMinutes();
		var segundo = fechaSistema.getSeconds();
	
		document.getElementById("etiqueta4").innerHTML = "Has iniciado sesión el día " + dia + "\/" + mes +  "\/" + ano + " a las " + hora + ":" + minuto + ":" + segundo;	
		
}
//EJERCICIO 5
 function ejercicio5(){
	if (document.getElementById("number1").value != "") { 
		var precio = document.getElementById("number1").value;

		var descuento = precio * 0.20; 
		var descontado = precio - descuento;
		var iva = descontado * 0.21 ;
		var total = descontado + iva;

		document.getElementById('etiqueta5').innerHTML= "Subtotal" + precio + "€" + "<br>" + "descuento 20% " + descuento.toFixed(2) + "€" + "<br>" + "IVA 21%= " + iva.toFixed(2) + "€" + "<br>" + "Total " + 
		"<strong>" + total.toFixed(2) + "€" + "</strong>";
	}
}	
//EJERCICIO 6
function ejercicio6() {
	if (document.getElementById("date4").value != "") {
			var fecha = new Date(document.getElementById("date4").value);
			var dia = fecha.getDate(); 
			var mes = fecha.getMonth() +1; //sumamos 1 para contar como nosotros.
			var signo;
			var img;
			if( (dia >= 21 && mes == 3) || (dia <= 19 && mes == 4 )){ 
				signo = "Aries";
				img = "img/aries.jpg";
			}
			  else if ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
				signo="Tauro";
				img= "img/taurus.jpg";
			}
			else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
				signo= "Géminis";
				img= "img/gemini.jpg";
			}
			else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
				signo= "Cáncer";
				img= "img/cancer.jpg";
			}
			else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
				signo= "Leo";
				img= "img/leo.jpg";
			}
			else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
				signo= "Virgo";
				img= "img/virgo.jpg";
			}
			else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
				signo= "Libra";
				img= "img/libra.jpg";
			}
			else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
				signo= "Escorpio";
				img= "img/scorpio.jpg";
			}
			else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
				signo= "Sagitario";
				img= "img/sagittarius.jpg";
			}
			else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 01)) {
				signo= "Capricornio";
				img= "img/capricorn.jpg";
			}
			else if ((dia >= 20 && mes == 01) || (dia <= 18 && mes == 02)) {
				signo= "Acuario";
				img= "img/aquarius.jpg";
			}
			else if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
				signo ="Piscis";
				img = "img/pisces.jpg";
			}
			else {
				signo= "Hay algo mal";
			}
		document.getElementById("etiqueta6").innerHTML=	signo + "<img src=" + "'" + img + "'" + "width=100px height=100px>";
	}
}
//EJERCICIO 7
function ejercicio7(){				
			var y = document.getElementById("number2").value;
			if( y > 0 && y < 11){
				var x = "";
				var resultado = "";						
				for( x = 1 ; x <= 10 ; x++){
					resultado +=  y + " x " + x + " = " + (x * y) + "<br>";  			
					}
				document.getElementById("etiqueta7").innerHTML= "Tabla del " + y + "<br>" + resultado;
				document.getElementById("etiqueta7").style.color = "green";
			}
			else{
				document.getElementById("etiqueta7").innerHTML= "introduzca un número del 1 al 10";
				document.getElementById("etiqueta7").style.color = "red";
			}				
		}
//EJERCICIO 8
 function ejercicio8(){
		if (document.getElementById("date5").value != "") {
			var fecha = new Date(document.getElementById('date5').value);
			var fechaActual = new Date();			
			var edad = (fechaActual.getFullYear() - fecha.getFullYear()); 
			var resultado = " ";
			switch (edad) {								
				case 7:
				case 8:	
				   resultado = "Prebenjamin";
				   break;				
				case 9:
				case 10:	
				   resultado = "Benjamin";
				   break;
				case 11:
				case 12:
				   resultado = "Alevin";

				   break;				
				case 13:
				case 14:	
				   resultado = "Infantil";
				   break;
				case 15:
				case 16:
				   resultado = "Cadete";
				   break;
				case 17:
				case 18:
				case 19:
				   resultado = "Juvenil";
				   break;
				default: 
				   break;
			}
				if (edad > 19) {
					resultado = "Aficionado, si eres profesional eres un afortunado. Si no, introduce la fecha correctamente";
					document.getElementById("etiqueta8").style.color = "red";
				}
				else if (edad < 5) {
					resultado = "No tienes la edad aún o has introducido mal la fecha";
					document.getElementById("etiqueta8").style.color = "red";
				}	
			document.getElementById("etiqueta8").innerHTML = "Tienes " + edad + " años" + "<br>" + "Tu categoría es " + resultado;
		}
 }
//EJERCICIO 9
function ejercicio9(){
	var car = { nombre:"Juan", apellido:"Fernández", telefono: "654789452", email: "jfernandez@gmail.com",
		fecha: "02/07/1968", edad: "50 años"};
		document.getElementById("etiqueta9").innerHTML = "<table style='border:1px solid grey'><tr><th>Nombre</th><th>Apellidos</th><th>Teléfono</th><th>Email</th><th>Fecha</th><th>Edad</th></tr> <tr><td>" + car.nombre +
	"</td><td>" + car.apellido + "</td><td>" + car.telefono + "</td><td>" + car.email + "</td><td>" + car.fecha + "</td><td>" + car.edad + 	"</td></tr></table>";
}


//EJERCICIO 10
function ejercicio10(){					
	document.getElementById("micaja").style.display = "block";	
}
function aceptar(){	
	document.getElementById("micaja").style.display = "none";	
}