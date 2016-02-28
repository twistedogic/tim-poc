var gulp = require('gulp');
var mocha =  require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var stylish = require('jshint-stylish');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');

gulp.task('lint', function() {
  return gulp.src('./src/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('pre-test',function(){
  return gulp.src(['./src/**/*.js'])
  .pipe(istanbul())
  .pipe(istanbul.hookRequire());
});

gulp.task('coverage',function(){
  return gulp.src(['./test/*.test.js'])
  .pipe(mocha())
  .on('error',gutil.log)
  .pipe(istanbul.writeReports());
});

gulp.task('test',['lint'],function(){
  return gulp.src(['./test/*.test.js'])
  .pipe(mocha())
  .on('error',gutil.log);
});

gulp.task('watch',function(){
  gulp.watch('./test/*.test.js',['test']);
  gulp.watch('./src/**/*.js',['test']);
});

gulp.task('default',['test']);
