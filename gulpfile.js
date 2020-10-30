let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

gulp.task('minify-css' , () => {
    return gulp.src('css/styles.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass', function () {
	return gulp.src('./scss/main.scss')
		.pipe(sass())
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('./css/'));
});

function reload(done) {
browserSync.reload();
done();
}

function serve(done) {
browserSync.init({
    server: {
    baseDir: './'
    }
});
done();
}
  


const watching = () => gulp.watch(['./scss/**/*.scss', './js/*.js', 'index.html'], gulp.series('sass', 'minify-css', reload));
  
gulp.task('default', gulp.series(serve, watching));

gulp.task('minify-sass' , gulp.series('sass' ,'minify-css'));

gulp.task('sass-watch' , function () {
    return gulp.watch('scss/**/*.scss', gulp.series('minify-sass'));
});