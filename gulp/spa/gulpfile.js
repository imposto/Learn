const {series, parallel} = require('gulp')
const gulp = require('gulp')
 
const {appHTML, appCSS, appJS, appIMG,} = require('./gulpTasks/app') // parallel 
const {depsCSS, depsFonts} = require('./gulpTasks/deps') // paralell
const {monitorarArquivos, servidor} = require('./gulpTasks/servidor') // tem que acontecer depois de todos os arquivos OK

 // qual vai ser a sequencia 
module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)