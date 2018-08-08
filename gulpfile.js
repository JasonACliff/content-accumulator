const gulp = require('gulp');
const rollup = require('rollup');
const uglify = require('gulp-uglify-es').default;
const sourcemaps  = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const del = require('del');
const vinylPaths = require('vinyl-paths');



gulp.task('build',['rollup', 'uglify', 'clean-up-after-build']);

gulp.task('rollup', function (  ) {
	return rollup.rollup({
		input: 'src/scripts/main.js',
		plugins: []
	}).then(bundle => {
		return bundle.write({
			file: 'tmp/content-accumulator.js',
			format: 'es',
			name: 'content-accumulator',
			sourcemap: false
		});
	});
})


gulp.task('uglify', ['rollup'], function (  ) {
	
	return gulp.src('tmp/content-accumulator.js')
		.pipe(rename('content-accumulator.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'))
	
	
})



gulp.task('uglify-src-maps', ['rollup'], function (  ) {
	
	return gulp.src('tmp/content-accumulator.js')
		.pipe(rename('content-accumulator.min.js'))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('dist/'))

	
})

gulp.task('clean-up-after-build', ['uglify'], function() {
	
	//return del(['/tmp/*'])
	
	return gulp.src('tmp/*')
		.pipe(vinylPaths(del))
	
})