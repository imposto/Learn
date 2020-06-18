const {series, parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function trasformacaoSass(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('biuld/css'))
}


function copiaHtml(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('biuld'))
}

exports.default = series(parallel(trasformacaoSass, copiaHtml))