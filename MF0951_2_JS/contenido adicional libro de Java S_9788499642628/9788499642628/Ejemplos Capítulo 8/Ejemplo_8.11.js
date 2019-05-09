var err=new Array();
err[0]="La longitud del nombre entre 3 y 30 caracteres";
err[1]="Valor de edad no numérico";
err[2]="Valor de edad entre 0 y 130 años";
err[3]="Email no valido";
err[4]="Contraseña no cumple criterios";
err[5]="Las contraseñas no coinciden";
err[6]="Seleccione un idioma";
err[7]="Debe aceptar las condiciones del servicio";

function borrar_error(){
   document.getElementById('err1').innerHTML="";
   document.getElementById('err2').innerHTML="";	 
   document.getElementById('err3').innerHTML="";	 
   document.getElementById('err4').innerHTML="";	 
   document.getElementById('err5').innerHTML="";	 
   document.getElementById('err6').innerHTML="";	 
   document.getElementById('err7').innerHTML="";	
}
