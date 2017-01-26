var gulp = require('gulp');
var htmllint = require('gulp-htmllint');

gulp.task('htmllint', () => {
    return gulp.src('./tests/**/*.html')
        .pipe(htmllint());
});
