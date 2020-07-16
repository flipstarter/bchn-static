let gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Tasks

// Starts browserSync
gulp.task('serve', function(done){
  browserSync({
    server: {
      baseDir: '.',
      index: "index.html",
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });
  done();
});

// Default task
exports.default = gulp.series('serve');
