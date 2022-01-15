const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js') //busca todos arquivos js
        .pipe(babel({ //vai converter os arquivos gulp pra js
            comments: false, //anula os comentarios
            presets: ["env"] //usa o preset mais moderno que existe
        }))
        .pipe(uglify()) //deixa todo codigo unificado em uma linha
        .on('error', err => console.log(err)) //trata o erro com o on
        .pipe(concat('codigo.min.js')) //da o nome do arquivo
        .pipe(gulp.dest('build')) //defini destino
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)