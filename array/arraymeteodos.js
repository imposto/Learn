const pilotos = ['Vettlel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Massa quebrou o carro ! [ Pop Retira o ultimo elemento do array ]

console.log(pilotos)
pilotos.push('Verstappen')

console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar

pilotos.splice(2, 0 , 'Botas', 'Massa')
console.log(pilotos)


//remover
pilotos.splice(3, 1) // massa quebrou :Cs
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) //  novo array a partir do indicado por parametro
console.log(algunsPilotos1)



//indice 4 nao entra no array
const algunsPilotos2 = pilotos.slice(1, 4) // os parametros passados é de onde o array parte e onde ele termina

