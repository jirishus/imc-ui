var gulp = require('gulp');
var connect = require('gulp-connect');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('localserver', function() {
  connect.server();
});

gulp.task('browser-sync', function() {
  browserSync({
    proxy: "http://localhost:8080/"
  });
});

gulp.task('default', ['localserver', 'browser-sync'], function() {
  console.log('default job');
  gulp.watch('index.html', browserSync.reload);
});
