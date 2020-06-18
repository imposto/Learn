Array.prototype.forEach2 = function(callback){
    for (let i = 0; i<this.length; i++){
        callback(this[i], i, this)
    }
}





const aprovados = ['isabela', 'Jéssica', 'Renan', 'Carlos  Eduardo']
console.log(aprovados)


//foreach percorre o array guarda numa variavel que pode ser utilizada depois
//recebe até 3 parametros, [nome, indice, array]
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})