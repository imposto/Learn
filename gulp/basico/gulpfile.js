const gulp = require('gulp')

// importei paraçllçes e series 
const {series, parallel} = require('gulp')
// const series = gulp.series 

const antes1 = cb => {
    console.log('Tarefa antes da copia 1')

    return cb()
}


function copiar(cb){
    
    console.log('Tarefa de Copiar')
    gulp.src('pastaA/**/*.txt') // qualquer arquivo do formato txt que esteja na pasta a
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt']) // seleciona quais arquivos vc vai usar como entrada no workflow que ira definir
    // .pipe() // aplica trasformaçoes nos aquivos de entrada, ex pega 30 imagens e diminui todas elas no processo
    // .pipe() // pode haver varias trasformaçoes encadeadas
        .pipe(gulp.dest('pastaB')) // vai colocar as imagens na pasta de destino que ira criar
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes da copia 2')

    return cb()
}


const fim = cb =>{
    console.log('Tarefa terminada')

    return cb()
}
module.exports.default = series(
    parallel(antes1, antes2), // execulta em paralelo, so depois que terminar esse paralello ele faz os proximos
    copiar,
    fim,)