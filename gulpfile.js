var gulp = require('gulp');
var connect = require('gulp-connect');
var compass = require('gulp-compass');
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

gulp.task('styles', function() {
  return gulp.src('sass/**/*.scss')
  .pipe(compass({
    css: './stylesheets',
    sass: './sass'
  }))
  .pipe(gulp.dest('stylesheets'))
});

gulp.task('default', ['localserver', 'browser-sync'], function() {
  console.log('default job');
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('stylesheets/*.css', browserSync.reload);
  gulp.watch('scripts/*.js', browserSync.reload);
  gulp.watch('index.html', browserSync.reload);
});
