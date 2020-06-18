console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)


function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports)
    console.log(this === module.exports)
    
    console.log(this === global)
    // Neste caso vc esta alterando uma variavel de forma globalllll
    this.perigos = 'Opa nene'
}
// esse esta dentro do module.exports
this.perigos = 'Opa nene'

//this dentro de uma funcao nao é mais o mesmo que exports, fora dela é.
logThis()