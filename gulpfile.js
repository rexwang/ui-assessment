var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['app']
    }
  });

  gulp.watch(['app/css/*.css']).on('change', browserSync.reload);;
  gulp.watch(['app/**/*.html']).on('change', browserSync.reload);
  gulp.watch(['app/**/*.js']).on('change', browserSync.reload);
});
