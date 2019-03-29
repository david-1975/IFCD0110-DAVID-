// JavaScript Document
// Ejercicio 1
function vivido() {
	var fecha = new	Date(document.getElementById("number1").value);
	var fechaact = new Date();
	var minutos = parseInt((fechaact-fecha)/1000/60);
	var horas = parseInt(minutos/60);
	var dias = parseInt(horas/24);
	var anos = parseInt(dias/365);
	/*alert(typeof(fecha)+" " +fecha+"\n"+fechaact+"\n"+"+edad+");*/
		
	
	document.getElementById("etiqueta1").innerHTML = "<b>RESULTADO:</b>" +
	"<ul><li>" + dias + "dias</li><li>" + horas + " horas</li><li>" + minutos + " minutos</li><li> " + anos + "años</li></ul>";
	
}
//Ejercicio 2
function formato(){
	var dia = document.getElementById("number2").value;
	var mes = document.getElementById("number3").value;
	var ano = document.getElementById("number4").value;
	var fechaUsuario = new Date(mes + "-" + dia + "-" + ano);
	var fechasistema = new Date();
	
	
document.getElementById("etiqueta2").innerHTML = "<br>" +
	"formato fecha " + dia + "/" + mes + "/" + ano + "<br>" + 
	"Hora sistema " + fechasistema.getHours() + ":" + fechasistema.getMinutes() + ":" + fechasistema.getSeconds();
}
//Ejercicio 3
function fechalarga() {
	var fecha = new Date(document.getElementById("date3").value);
	var dia = fecha.getDate();
	var diasemana = fecha.getDay();
	var mes = fecha.getMonth()+1;
	var ano = fecha.getFullYear();
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];	
	
	document.getElementById("etiqueta3").innerHTML = "<br>" + 
		"Hoy es " + dias[diasemana] + " " + dia + " de " + meses[fecha.getMonth()] + " de " + ano;
}
//Ejercicio 4
function login(){
	var usuario = document.getElementById("text4").value;
	var password = document.getElementById("password4").value;
	var fechasistema = new Date();
	var mes = fechasistema.getMonth()+1;
	
	if (usuario== "David"){
		mensaje=" Hola ";
	}
	else {
		alert(" El usuario " + usuario + " no es correcto ");
		return false;
	}	
	
	document.getElementById("etiqueta4").innerHTML = "<br>" + 
		mensaje + usuario + ", has iniciado sesión el día " + 
		fechasistema.getDate() + "/" + mes + "/" + fechasistema.getFullYear() +  
		" a las" + fechasistema.getHours() + ":" + fechasistema.getMinutes() + ":" + fechasistema.getSeconds() + ".";
}
//Ejercicio 5
function diasfaltan(){
	var fechaUsuario = new Date(document.getElementById("date5").value);
	var fechaact = new Date();
	
	var minutos = parseInt((fechaact-fechaUsuario)/1000/60);
	var horas = parseInt(minutos/60);
	var dias = parseInt(horas/24);
	var anos = parseInt(dias/365);
	
	var minutosact = fechaact.getDate();
	
	
	
	if (fechaUsuario > fechaact){
		var resta = fechaUsuario-fechaact;
		mensaje= " Tu cumpleaños a sido hace " + dias + " días ";
	}
	else {
		var resta = fechaact-fechaUsuario;
		
		mensaje= " Faltan " + dias + " días para tu cumpleaños ";
	}
	
	
	
	document.getElementById("etiqueta5").innerHTML = "<br>" +
		mensaje + "<br>" + "<br>" + "<br>" + "<br>";
}