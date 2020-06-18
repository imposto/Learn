const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML(cb){
    
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true})) // tira espaços em branco
        .pipe(gulp.dest('build'))
}


function appCSS(cb){
    
    return gulp.src('src/assets/sass/index.scss') // qual arquivo
        .pipe(sass().on('error', sass.logError)) // especifica se der errp
        .pipe(uglifycss({"uglyComments": true})) // tira os comentarios
        .pipe(concat('app.min.css')) // concatenma em 1 arquivo
        .pipe(gulp.dest('build/assets/css'))
} 


function appJS(cb){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}



function appIMG(cb){
    
    return gulp.src('src/assets/imgs/**.png')
        .pipe(gulp.dest('build/assets/imgs'))
}
gulp.task('appHTML', appHTML)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)
gulp.task('appCSS', appCSS)

module.exports = { // para conseguir usar essas 4 funcçoes fora do arquivo 
    appHTML,
    appCSS,
    appJS,
    appIMG,
}