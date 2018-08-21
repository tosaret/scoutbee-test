var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
 
gulp.task('default', function () {
    return watch('app/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/css'));
});