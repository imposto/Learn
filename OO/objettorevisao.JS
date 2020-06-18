//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'

produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario:{
        nome:'Raul',
        idade: 56,
        endereco:{
            longradouro:'Rua Abc',
            numero:123
        }
    },
    condutores: [{
        nome: 'Ana',
        RG: '432352-0'
    },{
        nome: 'Fabio',
        RG: '54343-9'
    }],
    calcularSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 203
carro['proprietario']['endereco']['longradouro'] = 'Av Gigante'

console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro

console.log(carro)
console.log(carro.condutores.length)