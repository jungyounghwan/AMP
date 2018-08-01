import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
/*import cleanCSS from 'gulp-clean-css';
import del from 'del';*/

const paths = {
    styles: {
        src : './assets/sass/**/*.scss',
        dest : './assets/css/'
    },
    scripts: {
        src: './assets/**/*.js',
        dest: './assets/scripts/'
    }
};

/*
 * For small tasks you can export arrow functions
 */
//export const clean = () => del([ 'assets' ]);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['> 10%']
    }))
    //.pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
        basename: 'style',
        suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

/*
 * You could even use `export as` to rename exported tasks
 */
function watchFiles() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
}
export { watchFiles as watch };

/*
 * You can still use `gulp.task`
 * for example to set task names that would otherwise be invalid
 */
const build = gulp.series(gulp.parallel(styles, scripts));
gulp.task('build', build);

/*
 * Export a default task
 */
export default build;