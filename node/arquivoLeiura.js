const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// _ _ dirname é uma constante do node que referencia o diretorio atual de qualquer lugar
//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//Assincrono..

fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (erro, arquivos)=>{
    console.log('Conteudo da Pasta...')
    console.log(arquivos)
})