// JavaScript Document
function nif() {
	var nif = document.getElementById("text1").value;
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var longitud = nif.length;
	var mensaje = "";
	var numero = Number(nif.substring(0,longitud-1));
	var letra = nif.substr(longitud-1,1).toUpperCase();
	if (isNaN(numero)) {
		mensaje = "El dato introducido no es un DNI";
	} else if (letras[numero % 23] == letra) {
			mensaje = "La letra es correcta";
		} else {
			mensaje = "La letra NO es correcta";
		}
	document.getElementById("etiqueta1").innerHTML = mensaje;
}

function horoscopo() {
	var fecha = new Date(document.getElementById("date2").value);
	var dia = fecha.getDate();
	var mesnac = fecha.getMonth();
	var mes = mesnac+1;
	var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];			
	var signo = "";
	var imagen = "";
	if ((dia >=21 && mes == 3) || (dia <=20 && mes == 4)) {
		signo = "Aries";
		imagen = "../img/aries.jpg";
	} else if ((dia >=21 && mes == 4) || (dia <=20 && mes == 5)) {
		signo = "Tauro";
		imagen = "../img/tauro.jpg";
	} else if ((dia >=21 && mes == 5) || (dia <=21 && mes == 6)) {
		signo = "Géminis";
		imagen = "../img/geminis.jpg";
	} else if ((dia >=22 && mes == 6) || (dia <=22 && mes == 7)) {
		signo = "Cáncer";
		imagen = "../img/cancer.jpg";
	} else if ((dia >=23 && mes == 7) || (dia <=23 && mes == 8)) {
		signo = "Leo";
		imagen = "../img/leo.jpg";
	} else if ((dia >=24 && mes == 8) || (dia <=23 && mes == 9)) {
		signo = "Virgo";
		imagen = "../img/virgo.jpg";
	} else if ((dia >=24 && mes == 9) || (dia <=22 && mes == 10)) {
		signo = "Libra";
		imagen = "../img/libra.jpg";
	} else if ((dia >=23 && mes == 10) || (dia <=22 && mes == 11)) {
		signo = "Escorpio";
		imagen = "../img/escorpio.jpg";
	} else if ((dia >=23 && mes == 11) || (dia <=21 && mes == 12)) {
		signo = "Sagitario";
		imagen = "../img/sagitario.jpg";
	} else if ((dia >=22 && mes == 12) || (dia <=19 && mes == 1)) {
		signo = "Capricornio";
		imagen = "../img/capricornio.jpg";
	} else if ((dia >=20 && mes == 1) || (dia <=19 && mes == 2)) {
		signo = "Acuario";
		imagen = "../img/acuario.jpg";
	} else if ((dia >=20 && mes == 2) || (dia <=20 && mes == 3)) {
		signo = "Piscis";
		imagen = "../img/piscis.jpg";
	} 
	document.getElementById("etiqueta2").innerHTML = "Naciste un " + dia + " de " + meses[mesnac] + "<br><br>" +  "<strong>Eres " + signo + "</strong><br>" + "<img href='#' width='100px' src='"+ imagen + "'><br>";	
}

function futbol () {
	var fnac = new Date(document.getElementById("date3").value);
	var fhoy = new Date();
	var edad = parseInt(fhoy.getFullYear() - fnac.getFullYear());
	if ((fnac.getMonth() > fhoy.getMonth()) || ((fnac.getMonth() == fhoy.getMonth()) && (fnac.getDate() > fhoy.getDate()))) {
		edad = edad - 1;
	}
	var categoria = "";
	var res = document.getElementById("etiqueta3");
	if (isNaN(fnac) || (fnac > fhoy)) {
		res.innerHTML = "No has introducido una fecha válida";
	} else {
		switch (edad) {
			case 0:
			case 1:
			case 2:
			case 3:		
			case 4:
				categoria = "No hay categorías de futbol para esa edad";
				break;
			case 5:
			case 6:
			case 7:
				categoria = "Prebenjamines";
				break;
			case 8:
			case 9:
				categoria = "Benjamines";
				break;		
			case 10:
			case 11:
				categoria = "Alevines";
				break;	
			case 12:
			case 13:
				categoria = "Infantiles";
				break;	
			case 14:
			case 15:
				categoria = "Cadetes";
				break;	
			case 16:
			case 17:
			case 18:
				categoria = "Juveniles";
				break;	
			default:
				categoria = "Aficionados";
		}
	res.innerHTML = "Eres de la categoría: " + categoria.toUpperCase() + "<br>";
	}
}

function frutas () {
	var entrada = document.getElementById("text4").value;
	var frutas = entrada.split(",");
	var res = "<ul>";
	var i;
	for (i = 0; i < frutas.length; i++) {
		res += "<li>" + frutas[i] + "</li>";
	}
	res += "</ul><br>";
	document.getElementById("etiqueta4").innerHTML = "Frutas:<br>" + res;
}

function tablamultiplicar () {
	var numero = document.getElementById("number5").value;
	var tabla = [];
	var i, resultado;
	for (i = 1; i <= 10; i++) {
		resultado = numero * i;
		tabla[i-1] = numero + "x" + i + "=" + resultado;
	}
	var restabla = "<table style='border: 1px solid white;'><tbody><tr><td><strong>Tabla de multiplicar</strong></td></tr>";
	for (i = 0; i < 10; i++) {
		restabla += "<tr><td>" + tabla[i] + "</td></tr>";
	}
//	document.getElementsByTagName("table").style.border = "1px solid white";
//	document.getElementsByTagName("tr").style.border = "1px dotted grey";
	document.getElementById("etiqueta5").innerHTML = restabla + "</tbody></table>";
	
}
