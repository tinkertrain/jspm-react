import gulp from 'gulp';
import { server } from 'karma';

import config from '../config';

gulp.task('test:dev', done => {
  server.start({
    configFile: config.path.tests.files
  }, done);
});
