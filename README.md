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
- Install jspm `npm install -g gulp`
- `npm install`
- `jspm install`
- Gulp tasks:
    - `gulp` or `gulp serve` To run the application on port 3500, watchin changes on js files (compiling jsx) and sass files (compile, autoprefix and produce sourcemaps).
    - `gulp test` Shortcut to run karma, it of course can be run directly without gulp
    - `gulp build` Same as `gulp` except it doesn't run a server
    - `gulp dist` Make a distribution copy: Bundle the application in one JS file and minify it with Uglify, compile sass files and minify them, put everything in the dist folder.

Everything in the src folder is for example purposes. Have a look to see how everything is wired (the application itself is not finished and might not be).

## Why choose… ?

- ES6 modules: They're the future baby
- JSPM: Get the best of the npm and bower world with no hassle.
- Gulp: gulp won, is just better.
- Sass: sass has always been the best, node-sass brings the speed so no need for anything else.
- Karma: I like Testem too, but karma has a larger community around it and it's easy to integrate with SystemJS and jspm
- BrowserSync: Because is seriously awesome.

## Roadmap

- [ ] Integrate rendering at compilation time for the home page (index.html), preferably still using ES6 modules (JSX transpiler doesn't support them)
- [ ] Incorporate code coverage with Istanbul (waiting on [https://github.com/Workiva/karma-jspm/issues/22](https://github.com/Workiva/karma-jspm/issues/22) from karma-jspm)
- [ ] .(Maybe) Integrate one of the many Flux implementations
- [ ] .(Maybe) Integrate a router

## Resources

If you want a more stable and probable better put together React Kit project that uses webpack, have a look at the [React Starter Kit](https://github.com/kriasoft/react-starter-kit).
