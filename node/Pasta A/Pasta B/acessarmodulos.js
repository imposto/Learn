const moduloA = require ('../../moduleA')
console.log(moduloA.ola)

//const saudacao = require ('../../../node_modules/saudacao/index')
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./Pasta C')
//const c = require('./Pasta C/index')
console.log(c.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write(c.ola)
    res.end()
}).listen(8080)