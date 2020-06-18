
//elementros filtrados corresponde um novo array
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
           newArray.push(this[i])
       }
    }
    return newArray
}


const produtos = [
    {nome: 'Notebook', preco:2999, fragil: true, moeda: 'R$'},
    {nome: 'AiPods', preco: 1999, fragil: true, moeda: 'R$'},
    {nome: 'Copo de Vidro', preco: 9.99, fragil: true, moeda: 'R$'},
    {nome: 'Copo de plastico', preco: 2.99, fragil: false, moeda: 'R$'}
]


//console.log(produtos.filter(function(p){
//  return p.preco > 1800 && p.fragil == true
//}))


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))