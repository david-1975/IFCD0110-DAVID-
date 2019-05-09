function enviar() {
 borrar_error(); //borra mensajes de error previos     
 if ( document.getElementById('nom').value.length < 3 ||
      document.getElementById('nom').value.length > 30  ) {
     document.getElementById('err1').innerHTML=err[0];
	 document.getElementById('nom').focus();
	 return false;
 }
 var edad=parseInt(document.getElementById('edad').value);
 if (isNaN(edad)) {
     document.getElementById('err2').innerHTML=err[1];
  	 document.getElementById('edad').focus();
	 return false;
 }
if (edad<0 || edad > 130) {
    document.getElementById('err2').innerHTML=err[2];
  	document.getElementById('edad').focus();
	return false;
 }
 var email=document.getElementById('email').value;
 var patron = /^[\w-\.]{3,}@([\w-]{2,}\.)+\w{2,4}$/;
 if ( !patron.test(email)) {
     document.getElementById('err3').innerHTML=err[3];;
	 document.getElementById('email').focus();
	 return false;
 }
 var pw1=document.getElementById('pas1').value;
 CantNum=0; 
 for (var cont=0; cont<pw1.length; cont++) 
       if ( pw1.charAt(cont)>="0" && pw1.charAt(cont)<="9") CantNum++;
 if (pw1.length<7 || CantNum<2)  {
        document.getElementById('err4').innerHTML=err[4];
	 	document.getElementById('pas1').focus();
	    return false; 
 }
 var pw2=document.getElementById('pas2').value;
 if (pw2 !=pw1)  {
        document.getElementById('err5').innerHTML=err[5];
  	    document.getElementById('pas2').focus();
	    return false; 
 }
 var pos=document.getElementById('idiom').selectedIndex;
 if (pos==-1) {
     document.getElementById('err6').innerHTML=err[6];
  	 document.getElementById('idiom').focus();
	 return false; 
  }
 if ( document.getElementById('serv').checked==false) {
     document.getElementById('err7').innerHTML=err[7];
	 document.getElementById('serv').focus();
	 return false;
 }
 alert ("Formulario correcto: se procede al envío");
  return true;
}
