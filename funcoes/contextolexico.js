

//Contexto lexico é a referencia exatamente quando foi escrita, nao onde setá agora.


const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec(){
    const valor = 'Local' 
    minhaFuncao()
}
suhus
exec() 