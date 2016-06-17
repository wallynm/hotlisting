var gulp = require('gulp'),
	  less = require('gulp-sources-less'),
    livereload = require('gulp-livereload'),
  	cssmin = require('gulp-minify-css'),
  	concat = require('gulp-concat'),
  	sourcemaps = require('gulp-sourcemaps');

// Base folder to store compiled files
var buildFolder = '../public';

// Scripts files to import and compile
var scriptFiles = [
	'bower_components/jquery/dist/jquery.js', 
	'bower_components/bootstrap/dist/js/bootstrap.js'];

gulp.task('less', function() {
  return gulp.src('less/import.less')
	  .pipe(sourcemaps.init())
	  .pipe(less())
	  .pipe(cssmin())
	  .pipe(sourcemaps.write('./'))
	  .pipe(gulp.dest(buildFolder + '/css'))
	  .pipe(livereload());
});

gulp.task('fonts')

gulp.task('scripts', function() {
  return gulp.src(scriptFiles)
	  .pipe(sourcemaps.init())
	  .pipe(concat('main.js'))
	  .pipe(sourcemaps.write('./'))
	  .pipe(gulp.dest(buildFolder + '/js'))
	  .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('less/*.less', ['less']);
});