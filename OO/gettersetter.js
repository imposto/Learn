const sequencia = {
    _valor: 1, // convençao
    get valor() { return this._valor++},
    set valor(valor){
        if(valor> this._valor){
           this._valor = valor
        }
    }

}
// javascript ja chama pelo get e set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) 