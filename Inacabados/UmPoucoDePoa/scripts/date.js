  function  days() {
     var now = new Date()
     var dayName = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")    
     var dia = dayName[now.getDay()]
     return dia
 } 

module.exports = {days}
