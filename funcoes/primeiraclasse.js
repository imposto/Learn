// Função de first class Object (Cilizens)
// Higher-order function
//Funcao sem retorno retorna 'undefined'
//Criar de forma literal
function fun1() {



}

// Armazenar em uma variavel a funcao anonima
const fun2 = function () {

}

//Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj1= {}
obj1.falar = function () {return 'Opa'}

//Passar funcao como parametro
function run1(fun){
    fun()
}

run1(function(){console.log('Execultando.....')})


// Uma função pode retornar/conter uma funcao
function soma(a, b){
    return function (c){
        console.log(a+b+c)
    }
}

(soma(2,3)(2))

const cincoMais = soma(2,3)
cincoMais(4)