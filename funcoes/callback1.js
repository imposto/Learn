const frabricante = ["Mercedes","BMW", "Volvo", "Ford"]


function imprimirMarca(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

frabricante.forEach(imprimirMarca)
frabricante.forEach(function(fabricante){
    console.log(fabricante)
})


frabricante.forEach(fabricante => console.log(fabricante))