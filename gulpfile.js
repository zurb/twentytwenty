var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence');

gulp.task('build-css', function () {
  return gulp.src('src/scss/twentytwenty.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('jscs', function () {
  return gulp.src('src/js/jquery.twentytwenty.js')
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('jshint', function () {
  return gulp.src('src/js/jquery.twentytwenty.js')
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('build-js', function () {
  return gulp.src('src/js/jquery.twentytwenty.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename('jquery.twentytwenty.min.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('test', ['jshint', 'jscs']);
gulp.task('build', gulpSequence(['jscs', 'jshint'], 'clean', ['build-js', 'build-css']));
gulp.task('default', ['build']);
