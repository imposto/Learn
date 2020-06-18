function MeuObjeto() {
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto


//2 Objetos diferentes instanciados pela mesma função recebem o mesmo protype
console.log(obj1.__proto__===obj2.__proto__)

console.log(MeuObjeto.prototype === obj1.__proto__)


// Todos os objetos criados a partir deste prototipo receberão este atributo nome
MeuObjeto.prototype.nome = 'Anônimo'

MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia!! Meu Nome é ${this.nome}!!`)
}

obj1.falar()
obj2.nome = 'Falar'

obj2.falar()


//Literal
const obj3 = {}


obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()


//resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ == Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// Cadeia de prototipos