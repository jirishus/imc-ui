var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('localserver', function() {
  connect.server();
});

gulp.task('default', ['localserver'], function() {
  console.log('default job');
});
