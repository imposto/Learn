const alunos = [
    {nome : 'Joao', nota: 7.2, bolsista: true},
    {nome: 'Jéssica', nota: 8.9, bolsista: false},
    {nome: 'Paula', nota: 8.3, bolsista: false},
    {nome: 'Carlos', nota:7.2, bolsista: true}
]

// Desafo1: todos os alunos são bolsistas ?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio2: algum dos alunos é bolsista ?

const algunBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algunBolsista))