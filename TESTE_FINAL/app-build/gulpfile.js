// 
var gulp = require('gulp'),
	  less = require('gulp-sources-less'),
    livereload = require('gulp-livereload'),
  	cssmin = require('gulp-minify-css'),
  	concat = require('gulp-concat'),
  	sourcemaps = require('gulp-sourcemaps'),
  	copy = require('gulp-copy');


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

gulp.task('copy-fonts', function(){
	return gulp.src(['fonts/**/*.*'])
	  .pipe(copy(buildFolder + '/fonts', {prefix: 1}));
});

gulp.task('copy-images', function(){
	return gulp.src(['images/**/*.*'])
	  .pipe(copy(buildFolder + '/images', {prefix: 1}));
});

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

gulp.task('default', ['less', 'copy-fonts', 'copy-images', 'scripts']);