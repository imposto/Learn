Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i =0; i< this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}



const carrinho = [
    '{ "nome": "borracha", "preco": 0.59}',
    '{ "nome": "caderno", "preco": 0.99}',
    '{ "nome": "lapis", "preco": 1.99}'
]

// return um array com apenas os preços
// json.parse converter os caracteres json

const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.preco


const resultado = carrinho.map(paraObjeto).map2(preco)
console.log(resultado)



