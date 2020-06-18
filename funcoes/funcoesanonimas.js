const soma = function (x,y) {
    return y + x
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(5, 2)
imprimirResultado(3, 4, soma)
imprimirResultado(3,4, function (x,y){
    return x - y
})

imprimirResultado(3, 4, (x,y) => x * y)


const pessoa = {
    falar : function() {
        console.log('Olá')
    }
}

pessoa.falar()