const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1239.99,
    desconto: 0.15
}


//Escrevendo um arquivo e persistindo no disco no formato JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro =>{

    // valor null = false no js
    console.log(erro || 'Arquivo salvo') 
})