const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const babel = require('gulp-babel')







function depsCSS(cb){

    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss())
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts(cb){
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))




    return cb()
}

module.exports = { // para conseguir usar essas 2 funcçoes fora do arquivo 
    depsCSS,
    depsFonts
}