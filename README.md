# Simply Events Client for Browser

### Setup node & npm

* ref: https://nodejs.org
* ref: https://www.npmjs.com
* Upgrade brew: `brew upgrade`
* Fix brew: `brew doctor`
* Check node version: `node -v`
* Set latest node version: `node latest`
* Check npm version: `npm -v`
* Update npm: `npm install npm@latest -g`
* Update packages: `npm update`
* Test update status: `npm outdated`

### Create directory structure

```
app
dist/
src/
.gitignore
license.txt
README.md
```

### Initialize npm

* ref: https://www.npmjs.com
* Create npm: `npm init`

### Setup Webpack

* ref: https://webpack.github.io
* ref: https://github.com/d3viant0ne/awesome-webpack
* Install globally: `npm install webpack -g`
* Install locally: `npm install --save-dev webpack`
* Install dev tools: `npm install --save-dev webpack-dev-server`
* Install webpack html module: `npm install --save-dev html-webpack-plugin`
* Create config file: `touch webpack.config.js`
* Setup the basic config:

```js
module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "index_production.js",
  },
};
```

* Run `webpack` to render `bin/app.bundle.js`

### Setup webpack with babel

* Install babel core: `npm install --save-dev babel-core`
* Install babel loader: `npm install --save-dev babel-loader`
* Install babel for react: `npm install --save-dev babel-preset-react`
* Add loader in webpack:

```
module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
    },
  ],
},
```

* Add babel config: `touch .babelrc`

## Setup webpack with ES6

* ref: https://es6.io/account/access/578d8172cf4f29f533cd4280/view/174357593

### Setup HTMLWebpackPlugin

* Add plugin to `webpack.config.js`:

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
});

...


```


### Setup React and ReactDom

* Install react: `npm install --save react`
* Install react-dom: `npm install --save react-dom`

### Setup sourcemaps
### Setup SASS
### Setup Flexbox

### Setup ESLint

* ref: http://eslint.org
* ref: https://github.com/dustinspecker/awesome-eslint
* install global: `npm install eslint -g`
* install local: `npm install eslint --save-dev`
* setup config: `touch .eslintrc`
* write config:

```js
{
  "env": {
    "es6": true,
    "browser": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console": "warn"
  },
  "plugins": [
    "html"
  ]
}
```

  * install airbnb config global:

```
npm install -g eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
```

  * install airbnb config local:

```
npm install --save-dev eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
```

* In `.eslintrc`, change `"extends": "airbnb"`
* Add `eslint-plugin-html` with `npm install -g eslint-plugin-html`
* Add `eslint-plugin-html` with `npm install --save-dev eslint-plugin-html`
* Add plugin settings to `.eslintrc`

### Setup Mocha, Chai, Enzyme, Sinon/Test Double
### Consider Immutable.js
### Setup React
### Setup Redux
### Setup React Router 4
### Setup React Saga or Thunk
### Setup AWS S3/Cloudfront
### Setup Rollbar or Sentry
### Setup Github Project
### Setup Circle CI

* use eslint to check
* use mocha to check
