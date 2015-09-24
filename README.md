Note: This kit is a bit outdated now and I haven't had the time to update it properly, I'm sorry if doesn't work as it should but it might still be a good basis for your projects. I'll try to find some time and update it, in the mean time I accept pull requests (thanks for the ones some people have made btw!). Cheers

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
- Install gulp `npm install -g gulp`
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


## License

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
