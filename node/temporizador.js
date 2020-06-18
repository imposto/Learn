const schedule = require('node-schedule')
// ---------------------------------(5 EM 5 SEGUNDOS - QUALQUER MINUTO - HORA - QUALQUER DIA DO MES - QUALQUER MES - DIA DA SEMANA )
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 1', function(){
    console.log('Execultando Tafera 1', new Date().getSeconds() )
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = (new schedule.Range(1,5))

regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Execultando Tarefa 2', new Date().getSeconds())
})