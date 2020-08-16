const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('pack-messenger', () => {
  return gulp.src([
    'messenger/css/*.css'
  ])
    .pipe(concat('messenger.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('output'));
});

gulp.task('default', gulp.series('pack-messenger', done => {
  done();
}));