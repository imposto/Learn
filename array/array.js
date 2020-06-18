// Array é um objeto sem nomes organizados por indice
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Calors', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//caso vc tente encontrar dentro do array um indice inexistente returnará undefined
//adiciona um elemento no indice de um array
aprovados[3] = 'Paulo'

//melhor metodo para adicionar dentro do array
aprovados.push('Abia')

//verifica a quantidade de itens dentro de um array
console.log(aprovados.length)

// é possivel adicionar um dado dentro de qualquer indice no array, todos entre o adicionado e inicial ficaram como undefined
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

//---------------------------------------

// sort é um metodo dentro do array que organiza os dados/ altera/ undefined ficando em ultimo
aprovados.sort()
console.log(aprovados)

//deletando dados dentro do array
delete aprovados[1]

// apos excluir nao é redefinido as posiçoes, o excluido se torna undefined
console.log(aprovados[1])
console.log(aprovados[2])

//splice inclui, deleta e substitui e adiciona em qualquer lugar de um array dados.
// splice recebe 2 atributos, desde o inicial e quantos indices a frente do inicial serão excluidos do array.
aprovados = ['bIA', 'Carlos', 'Ana']
aprovados.splice(1,0, 'Elemento1', 'Elemento2')
console.log(aprovados)

