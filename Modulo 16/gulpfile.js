const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

function comprimiJs() {
    return gulp.src('source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimiImages() {
    return gulp.src('source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}


exports.sass = compilaSass;

exports.js = comprimiJs;

exports.images = comprimiImages

exports.default = function() {
    gulp.watch('source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimiJs));
    gulp.watch('source/images/*', {ignoreInitial: false}, gulp.series(comprimiImages));
}