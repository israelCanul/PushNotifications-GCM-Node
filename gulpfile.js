var gulp = require('gulp');
var html2jade = require('gulp-html2jade');
var options = {nspaces:2};


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('htmltojade', function() {
  gulp.src('viewshtml')
    .pipe(html2jade(options))
    .pipe(gulp.dest('views'));
});