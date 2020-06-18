const aprovados = ['isabela', 'Jéssica', 'Renan', 'Carlos  Eduardo']
console.log(aprovados)


//foreach percorre o array guarda numa variavel que pode ser utilizada depois
//recebe até 3 parametros, [nome, indice, array]
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
 
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)