const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
    
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019',
})

pessoa.dataNascimento = '01/02/202033'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign (ECAScript 2015)
const dest = { a: 1}
const o1 = {b: 2}
const o2 = { c: 3, a :4}

// O primeiro parametro e o destino, e sera concatenado com todos os seguintes
const obj = Object.assign(dest, o1, o2, )

console.log(dest)

Object.freeze(obj)
obj.c = 1234 
console.log(obj)