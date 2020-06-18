let valor // não inicializada
console.log(valor)

valor = null // ausenscia de valor ou referencia
console.log(valor)
// console.log(valor.toString()) // Erro!
 
const produto = {}
console.log(produto.preco)
produto.preco = 3.58
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
 
console.log(produto.preco)