/** Gulp file for tasks */

var paths = {
	sass: 'css/source',
	css: 'css',
	js: 'js',
	bootstrapjs: 'bower_components/bootstrap-sass/assets/javascripts',
	jquery: 'bower_components/jquery/dist'
};

var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

gulp.task('sass', function() {
	return sass(paths.sass + '/style.scss', {
			style: 'compressed',
			sourcemap: true,
			cacheLocation: '/tmp/sass-cache'
		})
		.on('error', function (err) {
			console.error('Error!', err.message);
		})
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.css))
		.pipe(notify("Sass compiled."));
});

// gulp.task('copy_bootstrapjs', function() {
// 	return gulp.src(paths.bootstrapjs + '/bootstrap.min.js')
// 		.pipe(gulp.dest(paths.js));
// });

// gulp.task('copy_jquery', function() {
// 	return gulp.src(paths.jquery + '/jquery.min.js')
// 		.pipe(gulp.dest(paths.js));
// });

// Copy stuff
// gulp.task('copy', ['copy_bootstrapjs', 'copy_jquery']);

// Watch
gulp.task('watch', function() {
     gulp.watch(paths.sass + '/**/*.scss', ['sass']); 
});

// Default
  gulp.task('default', ['sass']);
