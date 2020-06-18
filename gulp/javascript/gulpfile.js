const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const minify = require('gulp-babel')


function padrao(cb){
    gulp.src('src/**/*.js')
        .pipe(minify({
            mangle: {
            keepClassName: true
            }
        }))
        .pipe(uglify()) // pega todo codigo e minifica
        .pipe(concat('NomeDoArquivoFinal.min.js')) // vai pegar todos arquivos que ja foram minificados e concatena
        .pipe(gulp.dest('build')) // o destino dos arquivos traspilados
    return cb()
}

exports.default = series(padrao)