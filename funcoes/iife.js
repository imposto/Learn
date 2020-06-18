// IIFE -> Expressao de funcao imediatamente invocada

// qualquer variavel escrita dentro desta funçao sera visivel apenas aqui
(function(){
    console.log('Será execultado na hora')
    console.log('Foge do scopo mais abrangente!')
})()