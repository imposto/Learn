
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject(frase)
        }, segundos * 1000)
    })
}

// resolve recebe apenas 1 parametro
// se quiser passar mais precisa passa um objeto contendo os dados
// assim que um then acaba ele vai para o outro, e possivel encadialos para linha de baixo
falarDepoisDe(3, 'Delicia')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e =>console.log(e))