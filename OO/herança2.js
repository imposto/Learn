// Cadeia de prototipos (prototype Chain)

Object.prototype.attr0 = '0'
// Avo nao faz prototipo com nenhuma variavel, entao e prototipo do padrão, que pode ser declarado assim como o exemplo acima
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}


// buscou atravez do filho o valor da variavel seguindo os prototipos em cadeia
console.log(filho.attr0, filho.attr1, filho.attr3, filho.attr2)

const carro = {
    velAtual: 0,
    velMax: 10000,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}

const Ferrari = {
    modelo: 'F40',
    velMax: 324 //  Shadowing
}

const Volvo = {
    modelo: '567',
    velMax: 190,
    status(){
        //super chama exatamente o modelo do prototype
        return `${this.modelo}: ${super.status()}`
    }
}

// Seta o protype do primeiro Objeto escrito nos Parametros
Object.setPrototypeOf(Ferrari, carro)
Object.setPrototypeOf(Volvo, carro)
console.log(Ferrari)
console.log(Volvo)

Volvo.acelerar(300)

console.log(Volvo.status())
