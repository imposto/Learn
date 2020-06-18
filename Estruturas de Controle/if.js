function aprovacao(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
} 
aprovacao(9)



function seForVerdadeiroEuFalo(valor){
    if(valor) {
        console.log('Automaticamente sera covnvertido pra booleano verdadeiro')

    }
}

seForVerdadeiroEuFalo() // undefind e falso como visto na aula de boolean
seForVerdadeiroEuFalo(null) //
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([1, 2, 3, 5])
seForVerdadeiroEuFalo({})
