const gulp = require('gulp');
const sass = require('gulp-sass');

const Path = {
    CSS_SOURCES: './assets/sass/**/*.scss',
    CSS_OUT_DIR: './assets/css/'
};

gulp.task('sass', function() {
    return gulp.src(Path.CSS_SOURCES)
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(Path.CSS_OUT_DIR));
});

gulp.task('watch', function() {
    gulp.watch(Path.CSS_SOURCES, gulp.series('sass'));
});

gulp.task('default', ['sass']);