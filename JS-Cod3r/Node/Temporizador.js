const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 4', function() { // a funcao anonima fica associada ao timer
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) // '*/5 (faz rodar de 5 em 5 segundo(se fosse só o 5 ele rodaria sempre no segundo 5
//* 12(as 12 horas) * *(ignora o mes e o dia do mes) 2(parametro do dia da semana)' 

setTimeout(function(){  //setTimeout é mum temporizador padrao JS
    tarefa1.cancel()// .cancel() é um comando js
    console.log('Cancelando Tarefa1!')
}, 20000) // aqui ele cancelara o processo apos 20 segundos 

//setImediate seria um timeout com valor zerado
//setInterval dispara funçao intervalada

const regra = new schedule.RecurrenceRule() // aqui ele cria a regra de recorrencia
regra.dayOfWeek = [new schedule.Range(1,5)] // por notacao ponto ele adiciona o dia da semana o primeiro parametro é o dia inicial e o segundo é o termino
regra.hour = 18 // as 12 horas
regra.second = 30 // nos segundo 30

const tarefa2 = schedule.scheduleJob(regra, function(){ //aqui ele usa a regra juntamente com a funçao
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})