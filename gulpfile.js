var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
   return gulp.src('./project/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./project'));
});

gulp.task('sass:watch',function() {
    gulp.watch('./project/sass/*.sass',['sass']);
});

var concat = require('gulp-concat');

gulp.task('concat', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/bootstrap.min.js',
            './project/js/script.js',
            './project/js/scriptTest.js',
            './project/js/scriptText.js'
        ])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./project'));
});