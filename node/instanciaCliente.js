const contadorA = require('./instanciaunica')
const contadorB = require('./instanciaunica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()


// chama a mesma instancia que ja foi criada em outro modulo e toda alteraçao é acumulativa
contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)


//Veio de uma instancia factory que cria um objeto, entao a cada chamada é feito novamente
contadorC.inc()
contadorC.inc()

console.log(contadorD.valor)