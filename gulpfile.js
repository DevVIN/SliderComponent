var gulp = require('gulp');  
var sass = require('gulp-sass');  
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');  

var path = {
    SCSS_DEV: ['src/scss/*.scss', 'src/scss/**/*.scss'],
    CSS: 'dist/css',
    JS_DEV: ['src/js-dev/*.js', 'src/js-dev/**/*.js'],
	JS: 'dist/js',
    OUT: 'app.js'
};

// SASS Task
gulp.task('sass', function() {
    gulp.src(path.SCSS_DEV)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.CSS))
        .pipe(notify({
            message: "you just got super Sassy!"
        }));
});

// uglify task
gulp.task('js', function() {
    gulp.src(path.JS_DEV)
	.pipe(uglify())
    .pipe(gulp.dest(path.JS))
    .pipe( notify({
        message: "Javascript is now ugly!"
    }));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["dist/css/*.css", "dist/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'js', 'browser-sync'], function () {  
    gulp.watch(path.SCSS_DEV, ['sass']);
	gulp.watch(path.JS_DEV, ['js']);
});
