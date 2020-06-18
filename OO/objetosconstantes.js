// pessoa -> 123 ->{...}
const pessoa = {nome : 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)


// Pessoa <- 456 -> {...} <-
//pessoa = {nome: 'Ana'}


// FRezza o objeto e que nao pode sofrer alteraçoes apos o freeze
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
pessoa.end = 'Rua Abc'
delete pessoa.nome

//criando um objeto que ficara com todos os atributos constantes
const pessoaConstante = Object.freeze({ nome : 'João'})

pessoaConstante.nome = 'João victors'
console.log(pessoaConstante)