const escola = [{
    nome: 'Tuma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 7
    }, {
        nome: 'Mariana',
        nota: 8
    }, {
        nome: 'Rosana',
        nota: 4
    }]
},  {
        nome: 'Turma M2',
        alunos:[{
            nome: 'Ruan',
            nota: 9
        },{
            nome: 'Lucas',
            nota: 10
        }]
}]


const getNotaDoAluno = a =>a.nota
const getNotasDaTurma = t => t.alunos.map(getNotaDoAluno)


const notas1 = escola.map(getNotasDaTurma)



Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)