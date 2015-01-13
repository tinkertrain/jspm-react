Webapp Starter
==============

Configured starter repo to build web apps with React and ES6 modules.

## Features

- Package manager: [jspm](http://jspm.io)
- ES6 modules
- Web server with live reload using [BrowserSync](http://browsersync.io)
- Gulp
- Node-sass
- Unit tests: Karma, Mocha, Chai, Sinon
- Uglify JS
- CSS Autoprefixing and minification

## Usage

- Clone the repo
- Install jspm `npm install -g jspm`
- `npm install`
- `jspm install`
- Gulp tasks:
    - `gulp` or `gulp serve` To run the application on port 3500, watchin changes on js files (compiling jsx) and sass files (compile, autoprefix and produce sourcemaps).
    - `gulp test` Shortcut to run karma, it of course can be run directly without gulp
    - `gulp build` Same as `gulp` except it doesn't run a server
    - `gulp dist` Make a distribution copy: Bundle the application in one JS file and minify it with Uglify, compile sass files and minify them, put everything in the dist folder.

Everything in the src folder is for example purposes. Have a look to see how everything is wired (the application itself is not finished and might not be).

