import gulp from 'gulp';
import rimraf from 'rimraf';

import config from '../config';

gulp.task('clean:dev', () => {
  rimraf(config.dev.dir, config.handleError);
});

gulp.task('clean:dist', () => {
  rimraf(config.dist.dir, config.handleError);
});
