import gulp from 'gulp';
import htmlreplace from 'gulp-html-replace';

import config from '../config';

gulp.task('html:dev', () => {
  return gulp.src(config.path.html.files)
    .pipe(gulp.dest(config.dev.html));
});

gulp.task('html:dist', () => {
  return gulp.src(config.path.html.files)
    .pipe(htmlreplace(config.htmlReplace))
    .pipe(gulp.dest(config.dist.html))
    .on('error', config.handleError);
});
