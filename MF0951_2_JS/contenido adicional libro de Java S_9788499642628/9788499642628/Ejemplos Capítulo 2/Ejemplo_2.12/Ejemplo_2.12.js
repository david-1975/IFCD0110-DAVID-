function escribir_fecha(){
  var fecha=new Date;
  var dia=fecha.getDate();  
  var mes=fecha.getMonth()+1;
  document.write("<h2>Dia:"+ dia + " - Mes:" + mes +"</h2>");
}
function cambiar_moneda(){
  var eur=document.getElementById('euros').value;  
  var dolar=eur*1.35;                              
  dolar=Math.round(dolar*100)/100;
  document.getElementById('dolares').value=dolar;
}
