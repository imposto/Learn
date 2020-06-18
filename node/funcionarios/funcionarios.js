const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func: funcAtual
}

axios.get(url).then(response => {
    funcionarios = response.data


    //muleheres chinesas 
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

        console.log(func)
})


// nom run consegue rodar um script com nome personalizado
// start e um script do node padrao

