const alunos = [
    {nome: 'Joao', nota: 7.2},
    {nome: 'Maria', nota: 8.2}
]


//imperativo
let total1 = 0
for(let i =0; i< alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)


//declarativo
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)