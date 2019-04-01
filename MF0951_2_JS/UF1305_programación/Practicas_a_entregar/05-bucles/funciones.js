// JavaScript Document
//Ejercicio1 (if else) array
function nif() {
	var dni = document.getElementById('text1').value;
	var numero = dni.substr(0,dni.length-1); 
	/*alert(numero);*/
	var letra = dni.substr(dni.length-1,1).toUpperCase();
	/*alert(letra);*/
	var numeroDni = numero % 23;
	/*alert(numeroDni);*/
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letrasArray =letras[numeroDni];
	/*alert(letrasArray);*/
	
	if (letra === letrasArray){
		document.getElementById('etiqueta1').innerHTML=
			"La letra es correcta"; 
	}
	else { 
		document.getElementById('etiqueta1').innerHTML=
			"La letra es incorrecta"; 
	}
	
}
//Ejercicio 2
function signoZodiaco() {
	var fecha = new Date(document.getElementById('date2').value);
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1; // +1 para que cero se iguale a nuestro mes.
	
	var signo = "";
	var imagen = "";
	if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {//Aries (Fecha: Del 21 de marzo al 20 de abril)
		signo = "Aries";
		imagen = "img/aries.jpg";
		
	} else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {//Tauro (Fecha: Del 21 de abril al 20 de mayo)
		signo = "Tauro";
		imagen = "img/tauro.jpg";
		
	} else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {//Géminis (Fecha: Del 21 de mayo al 21 de junio)
		signo = "Géminis";
		imagen = "img/geminis.jpg";
	 
	} else if ((dia >= 21 && mes == 6) || (dia <= 20 && mes == 7)) {//Cáncer (Fecha: Del 22 de junio al 22 de julio)
		signo = "Cáncer";
		imagen = "img/cancer.jpg";
	
	} else if ((dia >= 21 && mes == 7) || (dia <= 20 && mes == 8)) {//Leo (Fecha: Del 23 de julio al 23 de agosto)
		signo = "Leo";
		imagen = "img/leo.jpg";
	
	} else if ((dia >= 21 && mes == 8) || (dia <= 20 && mes == 9)) {//Virgo (Fecha: Del 24 de agosto al 23 de septiembre)
		signo = "Virgo";
		imagen = "img/virgo.jpg";
	
	} else if ((dia >= 21 && mes == 9) || (dia <= 20 && mes == 10)) {//Libra (Fecha: Del 24 de septiembre al 22 de octubre)
		signo = "Libra";
		imagen = "img/libra.jpg";	
		
	} else if ((dia >= 21 && mes == 10) || (dia <= 20 && mes == 11)) {//Escorpio (Fecha: Del 23 de octubre al 22 de noviembre)
		signo = "Escorpio";
		imagen = "img/escorpio.jpg";	
	
	} else if ((dia >= 21 && mes == 11) || (dia <= 20 && mes == 12)) {//Sagitario (Fecha: Del 23 de noviembre al 21 de diciembre)
		signo = "Sagitario";
		imagen = "img/sagitario.jpg";
		
	} else if ((dia >= 21 && mes == 12) || (dia <= 20 && mes == 1)) {//Capricornio (Fecha: Del 22 de diciembre al 19 de enero)
		signo = "Capricornio";
		imagen = "img/capricornio.jpg";	
	
	} else if ((dia >= 21 && mes == 1) || (dia <= 20 && mes == 2)) {//Acuario (Fecha: Del 20 de enero al 19 de febrero)
		signo = "Acuario";
		imagen = "img/acuario.jpg";	
		
	} else if ((dia >= 21 && mes == 2) || (dia <= 20 && mes == 3)) {//Piscis (Fecha: Del 20 de febrero al 20 de marzo)
		signo = "Piscis";
		imagen = "img/piscis.jpg";	
	
	} else {     														//fin de bucle.
		signo = "No existe ninguno.";
	}
	
	
	
	
	document.getElementById("etiqueta2").innerHTML = 
		"Naciste un " + dia + "/" + mes + "<br><br>" + "<strong>Eres " + 
		signo +"</strong>" + "<br>" + "<img src=" + "'" + imagen + "'" + "+width=100px height=100px>";
}

//Ejercicio 3: (switch)(Array)

function categoria() {
	var fecha = new Date(document.getElementById('date3').value);
	var ano = fecha.getFullYear();
	var anoact = new Date().getFullYear();
	var resta = parseInt(anoact - ano)
	
	var categoria = "";
	
		
	switch (resta) {      //Prebenjamines = 5,6,7 años 
			
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:	
				categoria = "No existe categoría " + resta + " años";
				break;	
			case 5:
			case 6:
			case 7:
				categoria = "Prebenjamin ";
				break;
			case 8:
			case 9:
				categoria = "Benjamin ";
				break;
			case 10:
			case 11:
				categoria = "Alevin ";
				break;
			case 12:
			case 13:
				categoria = "Infantil ";
				break;
			case 14:
			case 15:
				categoria = "Cadete ";
				break;
			case 16:
			case 17:
			case 18:
				categoria = "Juvenil ";
				break;
			default:
			categoria = "No existe la categoría de " + resta + " años";
			break;
	}
			
		document.getElementById("etiqueta3").innerHTML = categoria + ano; 
			}

// Ejercicio 4: (for)(Array)
function frutas(){
	var fruta = document.getElementById('text4').value;
	var cadena = fruta.split(" ");
	
	var texto = "";
	var i;
	for (i = 0; i < cadena.length; i++) {
    texto += "<li>" + cadena[i] + "</li>";
	}
	
		
	
	document.getElementById("etiqueta4").innerHTML = texto;
}
//Ejercicio 5: (for) (Array)
function tabla(){
	var entrada = document.getElementById('number5').value;
	var i=0;
	var resultado = "";
	
	for (i = 0; i <= 10; i++) {
		//document.write();
	resultado += "<table><tr><td>" + entrada + " X " + i +  " = " + (entrada*i) + "</td><tr></table>";
  document.getElementById("etiqueta5").innerHTML = resultado ;
	}
	
	
}