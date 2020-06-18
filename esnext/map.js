const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch)=>{
console.log(ch,vl)
})

// tem ?
console.log(chavesVariadas.has(123))

//delete 
chavesVariadas.delete(123)

//tem ?
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')