const gulp = require('gulp')
const webService = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb){
    return gulp.src('build') // vai ficar olhando para pasta
        .pipe(webService({
            port: 8080,
            open: true, // abrir o navegador
            livereload: true
        }))

}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')()) // sempre que alterar o arquivo com essa extensao especifica chama o segundo parametro que e uma funcao gulp especificando uma task
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/**/*.js', () => gulp.series('appIMG')())

    return cb
}

module.exports = {
    monitorarArquivos,
    servidor
}