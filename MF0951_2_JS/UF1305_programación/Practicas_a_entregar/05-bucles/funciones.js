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
	var mes = fecha.getMonth()+1;
	
	var signo = "";
	var imagen = "";
	if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {//Aries (Fecha: Del 21 de marzo al 20 de abril)
		signo = "Aries";
		imagen = "img/aries.jpg";
		
	} else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {//Tauro (Fecha: Del 21 de abril al 20 de mayo)
		signo = "Tauro";
		imagen = "img/tauro.jpg";
		
	}
	 
	
	
	
	document.getElementById("etiqueta2").innerHTML = 
		"Naciste un " + dia + "/" + mes + "<br><br>" + "<strong>Eres " + 
		signo +"</strong>" + "<br>" + "<img src=" + "'" + imagen + "'" + "+width=100px height=100px>";
}