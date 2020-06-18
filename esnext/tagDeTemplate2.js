function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice)=>{
        //toFixed2 cria zeros no valor
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
