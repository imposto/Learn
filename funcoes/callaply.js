function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome : 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.oreco = 20
global.desc = 0.1


console.log(produto.getPreco())

const carro = {preco: 49500, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// No call o primeiro parametro e o contexto, depois os parametros da função chamada
console.log(getPreco.call(carro, 0.17, '$'))

// No aply o primeiro contexto e depois os parametros dentro de um array
console.log(getPreco.apply(carro, [0.17, '$']))