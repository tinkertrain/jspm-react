import gulp from 'gulp';
import browserSync from 'browser-sync';

import config from '../config';

gulp.task('server:dev', () => {
  browserSync.init([
    config.dev.css + '/**/*.css',
    config.dev.js + '/**/*.js',
    config.dev.dir + '/**/*.html'
  ], {
    notify: false,
    server: {
      baseDir: [config.dev.dir]
    },
    port: config.port.dev,
    browser: [],
    tunnel: false
  });
});
