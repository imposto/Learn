//Object.preventExtensions
//Nao pode aumentar nem aidcionar novos objetos, pode excluir <Previne extensoes>

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borrada'
produto.descricao = 'Borracha escola Brnca'
delete produto.tag
console.log(produto)

//Object.seal
// Não pode incluir atributos e bnem excluo, mas altera.
const pessoa = { nome: 'juliana', idade: 34}

Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'SILVA'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)
