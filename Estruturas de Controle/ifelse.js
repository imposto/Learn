const inmprimirResultado = function(nota){
    if(nota >=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

inmprimirResultado(4)
inmprimirResultado('Caramba')// cuidado,fracamente tipada precisa tratar o dado!!
