//Desestruturaçao 


const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        longradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log('O Nome da pessoa é:', nome, idade)

//apelido para a variavel do destruction

const {nome: n, idade: i} = pessoa
console.log(n, idade)


//Chamando atributos que nao existem dentro do objeto retorna undefined
// porem se alocar um operador logico true em atribuicao as chamadas ele
const {sobrenome, personalidade = true} = pessoa
console.log(sobrenome, personalidade)

const { endereco: {longradouro, numero, cep} } = pessoa
console.log(cep, longradouro, numero)



// o caminho até o dado deve estar correto e valido, apenas o dado em si pode nao estar definido, caso contrario dará erro


//const {conta : {ag, num}} = pessoa 
//console.log(ag, nun)