import gutil from 'gulp-util';

export default {

  port: {
    dev: 8080,
    dist: 8081
  },

  path: {
    js: {
      files: 'src/**/*.js',
      entry: 'src/app.js',
      copy: ['jspm_packages/system.js', 'config.js'],
      jspm: 'jspm_packages/**/*'
    },
    sass: {
      files: 'src/**/*.scss'
    },
    html: {
      files: 'index.html'
    },
    tests: {
      files: 'karma.conf.js'
    }
  },

  dev: {
    dir: 'dev',
    js: 'dev/js',
    css: 'dev/css',
    html: 'dev',
    jspm: 'dev/jspm_packages'
  },

  dist: {
    dir: 'dist',
    js: 'dist/js',
    css: 'dist/css',
    html: 'dist'
  },

  autoprefixer: {
    browsers: ['last 2 versions']
  },

  htmlReplace: {
    'js': ['js/system.js', 'js/config.js', 'js/bundle.js'],
    'css': 'css/bundle.css',
    'entry_point': '<script> System.import("src/app.js"); </script>'
  },

  handleError: gutil.log,
};
