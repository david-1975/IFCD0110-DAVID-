// JavaScript Document


//Estructura if                        Ejecuta una serie de instrucciones si se cumple una determinada condición.
function horaIf() {
	var fecha = new Date();
	var hora = fecha.getHours();
//	var mensaje = "No son más de las 12";  1ª opción.
//	if (hora >= 12){
//		mensaje = "Buenos Días";
		
	var mensaje = ""

	if (hora >= 7 && hora <= 12) {
		mensaje = "Buenos días"
	}
	if (hora >= 13 && hora <= 18) {
		mensaje = "Buenas tardes"
	}
	if (hora >= 19 && hora <= 23) {
		mensaje = "Buenas noches"
	}
	if (hora >= 0 && hora <= 6) {
		mensaje = "Es de madrugada"
	}
	alert (mensaje);
}


//else  Ejecuta una segunda serie de instrucciones si no se cumple una determinada condición.
function horaElse() {
	var cumple = prompt ("¿cuantos años tienes?")
	if (cumple >=18 && cumple <=99){
		mensaje = "Felicidades, ya no eres un niño."
	}
	else {
		mensaje = "lo siento, todavía tienes que crecer."
	}
	alert (mensaje)
}

//esle if      Especifica una nueva condición si la primera condición no se cumple.
function horaElseIf() {
	var cumple = prompt ("¿cuantos años tienes?")
	if (cumple >=1 && cumple <= 80){     
		mensaje = "Felicidades."
	}
	else if (cumple >=80 && cumple <= 100){     
		mensaje = "Mala suerte, estas muerto"
	}
	else {
		mensaje = "Vuelve a intentarlo"
	}
	alert (mensaje)
}

//switch     Realiza diferentes acciones basadas en diferentes condiciones.
function switchCase() {
	var day;
switch (new Date().getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
    day = "Martes";
    break;
  case 3:
    day = "Miercoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case  6:
    day = "Sabado";
}
	alert ("Hoy es: " + day)
}

 //  for  Ejecuta un bloque de código varias veces, cada vez con un valor diferente.
function bucleFor() {
	var coches = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	//var text = parseInt(prompt ("Dime un número del 0 al " + coches.length));  // parseint comvierte los string (cadenas caracteres) en número.
	//alert (typeof(text));
	var texto = "";
	var i;
	for (i = 0; i < coches.length; i++) {
    texto += coches[i] + "\n";
}
	alert(texto); 
}	
// while  Ejecuta un bloque de código, siempre que la condición especificada sea verdadera.
function mientrasWhile() {
	var numero = prompt ("Dime un número");
	var texto = "";
	var i = 0;
	while (i < numero) {
  	texto += "El número es " + i + ";\n" ;
  	i++;
	}
	alert (texto)
}
//do while     Ejecuta el bloque de código una vez, antes de comprobar si la condición es verdadera, y se repite el bucle mientras la condición es verdadera.

function hacerMientrasDoWhile() {
	var numero = prompt ("Dime un número");
	var texto = ""
	var i = 0;
	do {
  	texto += "El número es: " + i + ";\n";
  	i++;
	}
	while (i < numero);
	
	alert (texto)
}


//break   Rompe un bucle, si se produce una condición especificada, y continúa con la siguiente iteración del bucle.

function romperBucle()  {
	var numero = prompt ("Dime un número para proyectar");
	var romper = prompt ("Dime un número donde romper");
	var texto = "";
	var i;
	for (i = 0; i < numero; i++) {
  	if (i === romper) { break; }
  	texto += "El número es " + i + ";\n";
	}
	alert (texto)
}

//continue   Continua un bucle, si se produce una condición especificada, y continúa con la siguiente iteración del bucle.
function continuarBucle() {
	/*var continuar = prompt ("Dime un número donde continuar");*/
	var texto = "";
	var i;
	for (i = 0; i < 10; i++) {
  	if (i === 3) { continue; }
  	texto += "The number is " + i + ";\n";
	}
	alert (texto)
}
