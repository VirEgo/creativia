var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync');
var urlAdjuster = require('gulp-css-url-adjuster');

gulp.src('app/css/main.css')
    .pipe(urlAdjuster({
    prepend: 'app/img',
    append: '?version=1',
}))
    .pipe(gulp.dest('modifiedStyle.css'));

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('code', function() {
    return gulp.src('*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('clear', function (callback) {
    return cache.clearAll();
})

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('*.html', gulp.parallel('code'));
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
