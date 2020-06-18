// arrow Function
// Funçoes anonimas sao sempre atribuidas a uma variavel ou constante
const soma = (a,b) => a + b
console.log(soma(4,5))

//Arrow function( this)
// this numa função arrow é o contexto onde ela foi escrita
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log(null)
log('Sou mais forte')


// Operador rest >>>>> agrupar
// varios parametros na chamada da função e eles sao agrupados num array dentro da função
function total (...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total 
}

console.log(total(1,2, 3,4,5))