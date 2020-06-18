// recebe o call back, pode recerber umv alor inicial, se nao passar ele vai na primeira chamada passar o primeiro indice
const alunos = [
    {nome : 'Joao', nota: 7.2, bolsita: true},
    {nome: 'Jéssica', nota: 8.9, bolsista: false},
    {nome: 'Paula', nota: 8.3, bolsista: false},
    {nome: 'Carlos', nota:7.2, bolsista: true}
]

// a é um apelido de alunos utilizado dentro da funcao
console.log(alunos.map(a => a.nota))
//reduce pega os 2 primeiros elementos e usa como parametro para o acumulador e o atual
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},0)

console.log(resultado)