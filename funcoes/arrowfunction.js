let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //funcao de apenas 1 linha

console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Olá' // funcao parametro vazio

console.log(ola())