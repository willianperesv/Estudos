const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass') // sass é o gulp pra css
const uglifycss = require('gulp-uglifycss') //minifica codigo css
const concat = require('gulp-concat') //concatena o codigo

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')//puxa todos elementos do css
        .pipe(sass().on('error', sass.logError))//trata o erro
        .pipe(uglifycss({ "uglyComments": true }))//minifica o codigo
        .pipe(concat('estilo.min.css'))//gera o nome do novo arquivo
        .pipe(gulp.dest('build/css'))//da o destino da pasta
}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}
// o parallel é pra fazer duas tarefas ou mais ao mesmo tempo
exports.default = parallel(transformacaoCSS, copiarHTML)