var gulp = require('gulp');
var browserSync = require('browser-sync');
var cp = require('child_process');
var messages = {
  reload: 'Reloading...',
  build:  'Building Middleman...'
};

gulp.task('copy-images', ['middleman-build'], function() {
  return gulp.src('../images/*.*')
      .pipe(gulp.dest('build/assets/images/'));
});

gulp.task('middleman-build', function(done) {
  browserSync.notify(messages.build);
  cp.spawn('bundle', ['exec', 'middleman', 'build'], { stdio: 'inherit' }).on('close', done);
});

gulp.task('browser-reload', ['copy-images'], function() {
  browserSync.notify(messages.reload);
  browserSync.reload();
});

gulp.task('browser-sync', ['copy-images', 'middleman-build'], function() {
  browserSync({
    server: {
      baseDir: 'build'
    },
    port: 4060
  });
});

gulp.task('watch', function() {
  gulp.watch('source/*.html.erb', ['browser-reload']);
  gulp.watch('source/partials/*.erb', ['browser-reload']);
  gulp.watch('source/layouts/*.erb', ['browser-reload']);
  gulp.watch('source/assets/javascripts/*.js', ['browser-reload']);
  gulp.watch('source/assets/stylesheets/*.css.scss', ['browser-reload']);
  gulp.watch('../scss/**', ['browser-reload']);
  gulp.watch('../images/**', ['browser-reload']);
});

gulp.task('serve', ['browser-sync', 'watch']);
gulp.task('build', ['middleman-build']);
// gulp.task('deploy', []);
gulp.task('install-bower', function(done) {
  cp.spawn('bower', ['install'], { stdio: 'inherit' }).on('close', done);
});
gulp.task('install-bundle', function(done) {
  cp.spawn('bundle', ['install'], { stdio: 'inherit' }).on('close', done);
});
gulp.task('install', ['install-bundle', 'install-bower']);
