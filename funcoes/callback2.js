const notas = [7.7, 2.7, 2.9, 9.0, 8.9]

// extrair de um array apenas as notas menores que 7
const notasBaixas1 = []

for (let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com call back

const notasBaixas2 = notas.filter(function (nota){
    return nota <=7
})

console.log(notasBaixas2)


//call back com function pra condição em arrow
const notasBaixas3 = notas.filter(notas => notas <7)
console.log(notasBaixas3)

//function reaproveitada 

const menor = notas => notas <7

const notasBaixas4 = notas.filter(menor)

console.log(notasBaixas4)