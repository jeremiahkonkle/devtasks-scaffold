// include gulp
var gulp = require('gulp'); 
  
// necessary javascript build tasks, for both dev and release
gulp.task('jsbuild', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(gulp.dest('./build/scripts'));
});