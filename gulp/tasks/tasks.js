import gulp from 'gulp';
import run from 'run-sequence';

import config from '../config';

gulp.task('dev', () => {
  run('clean:dev', ['html:dev', 'js:dev', 'js:copy:dev', 'css:dev'], 'js:jspm:dev', 'server:dev');
  gulp.watch(config.path.sass.files, ['css:dev']);
  gulp.watch(config.path.js.files, ['js:dev']);
});

gulp.task('dist', ['clean:dist', 'css:dist', 'html:dist', 'js:dist', 'js:copy:dist']);

gulp.task('default', ['dev']);
