const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        
        case 10:case 9: case 8: 
            console.log('Quadro de Honra')
            break
        case 7:case 6:{
            console.log('Aprovado acima da media')
            break
        }
        case 5: console.log('Aprovado')
            break
        case 4: case 3: case 2: case 1: case 0:
        console.log('Reprovado')
        break

        default:
            console.log('Nota invalida')
        break
    }
}

imprimirResultado(9)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(1)
imprimirResultado(-1)
