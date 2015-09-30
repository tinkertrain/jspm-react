import gulp from 'gulp';
import cache from 'gulp-cached';
import jspm from 'gulp-jspm';
import rename from 'gulp-rename';

import config from '../config';

gulp.task('js:dev', () => {
  return gulp.src(config.path.js.files)
    .pipe(cache('js'))
    .pipe(gulp.dest(config.dev.js));
});

gulp.task('js:dist', () => {
  return gulp.src(config.path.js.entry)
    .pipe(jspm())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(config.dist.js));
});

gulp.task('js:copy:dev', () => {
  return gulp.src(config.path.js.copy)
    .pipe(gulp.dest(config.dev.js));
});

gulp.task('js:copy:dist', () => {
  return gulp.src(config.path.js.copy)
    .pipe(gulp.dest(config.dist.js));
});

gulp.task('js:jspm:dev', () => {
  return gulp.src(config.path.js.jspm)
    .pipe(gulp.dest(config.dev.jspm));
});
