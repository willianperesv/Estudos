  function  days() {
     var now = new Date()
     var dayName = new Array ("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")    
     var dia = dayName[now.getDay()]
     return dia
 } 

   window.onload = function (){
  info = document.getElementById('infos')
  info.innerHTML = days()
   }
