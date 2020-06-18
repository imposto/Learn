const notas = [7.7, 7.8, 8.2, 2.3, 9.4]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Soares',
    idade: 17
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}