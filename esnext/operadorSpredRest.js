// operador ...rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12344.99}
clone = {ativo : true, ...funcionario}

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Carla']

console.log(grupoFinal)