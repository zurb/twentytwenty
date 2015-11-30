var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence');

var paths = {
  js: 'src/js/*.js',
  dist_js: 'dist/js',
  scss: 'src/scss/*.scss',
  dist_scss: 'dist/css'
};

gulp.task('build:css', function () {
  return gulp.src(paths.scss)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.dist_scss))
});

gulp.task('jscs', function () {
  return gulp.src(paths.js)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('jshint', function () {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter())
    .pipe(jshint.reporter('fail'));
});

gulp.task('server', function () {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(3000, '0.0.0.0');
});

gulp.task('build:js', function () {
  return gulp.src(paths.js)
    .pipe(gulp.dest(paths.dist_js))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(paths.dist_js));
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('watch', function() {
  gulp.watch(paths.scss, ['build:css']);
  gulp.watch(paths.js, ['test:js', 'build:js']);
});

gulp.task('test');
gulp.task('test:js', ['jshint', 'jscs']);
gulp.task('build', gulpSequence(['jscs', 'jshint'], 'clean', ['build:js', 'build:css']));
gulp.task('default', ['build', 'server', 'watch']);
