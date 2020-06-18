// --------------------------let e const------------------ 

{
    var a = 2 
    let b = 3

    console.log(b) // pode ser visto pois esta no mesmo local que a variavel let inicializada
}

// 0console.log(b) <b is not defined>
//variaveis do tipo var nao tem limitaçoes por bloco
// variaveis do tipo let so podem ser vistas dentro do bloco que foram inicializadas

console.log(a)

//------------------ Templete String ---------------------------

// Possivel
const produto = 'iPad'
console.log(`${produto} é 
caro`)

// --------------------- Destructuring --------------
// possivel usar o operador rest function(...params)
// Alocando uma string dividida em varias variaveis de um array junto com o restante a uma rest.

const [l, e, ...tras] = "Cod3r"
console.log(l, e,tras)

// espaço vazio pula valor do array
const [ x, , y] = [3, 4, 7] 
console.log(x, y)

// declarando variavel que recebe os valores de um objeto, os nomes das variaveis da constante tem de ser igual a do objeto
// é permitido colocar apelido na declaração da variavel para usa-la depois, substituindo o nome.
const { idade: i, nome} = {nome: 'Ana', idade:9}

console.log(i, nome)