var glob = require("glob");
var gulp = require('gulp');
var rjs = require('gulp-requirejs');
var path = require('path');

glob(path.join(__dirname, './r/**/main.js'), function(err, files) {
	console.log(files);
})

gulp.task('default', function() {
  gulp.src('./r/index.js')
  .pipe(gulp.dest('./build/'))
});