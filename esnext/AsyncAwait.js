
const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    
    return new Promise((resolve, reject)=> {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados =>{
                resultado += dados
            })
    
            res.on('end', ()=>{
                try {
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

// Recurso ES8
//Objetivo de simplificar o uso de promises...


// palavra await so funciona com "async"
//sempre que usar um promisse resgatar informaçoes, pode usar "await"
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}// independetemente do retorno a funcaio async com awair sempre returna um objeto AsyncFunction


// then te da acesso a oque a funcao retornou
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))


    