// usado a notação literal
const obj = { }

console.log(obj)

//objeto em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

// function Construtora de objetos
function Produto(nome, preco, desc){
    this.nome = nome // this faz com que o atributo fique visivel fora desta funçao
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook',2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Function factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Maria', 1200, 4)
const f2 = criarFuncionario('Calor', 1500, 2)

console.log(f2.getSalario())

//Object.creat
const filha= Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Uma funçãp famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
