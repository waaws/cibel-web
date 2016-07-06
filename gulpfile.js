var gulp = require('gulp');
var postcss = require('gulp-postcss');
var less = require('gulp-less');
 
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
 
gulp.task('default', function () {
    var processors = [
        autoprefixer,
        cssnano
    ];
    return gulp.src('./styles/less/index.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});

gulp.task('nonano', function () {
    var processors = [
        autoprefixer
    ];
    return gulp.src('./styles/less/index.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});
