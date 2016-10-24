# Simply Events Client for Browser

### Setup brew, node & yarn

* ref: https://nodejs.org
* Upgrade brew: `brew update`
* Upgrade brew: `brew upgrade`
* Fix brew: `brew doctor`
* Check node version: `node -v`

### Create the basic directory/file structure

```
app
dist/
src/
  actions/
  components/
  containers/
  reducers/
  index.jsx
  index.html
specs/
  components/
.gitignore
license.txt
README.md
```

### Initialize and use yarn

* ref: https://yarnpkg.com
* Create npm: `yarn init`
* Check yarn version: `yarn -v`
* Install yarn packages: `yarn install`
* Remove yarn packages: `yarn remove`
* Upgrade packages: `yarn upgrade`
* Upgrade status: `yarn outdated`

### Setup webpack

* ref: https://webpack.github.io
* ref: https://webpack.github.io/docs/webpack-dev-server.html
* ref: https://github.com/d3viant0ne/awesome-webpack
* Install globally: `yarn add webpack -g`
* Install locally: `yarn add --dev webpack`
* Install dev tools: `yarn add --dev webpack-dev-server`
* Install plugin for js/html injection: `yarn add --dev html-webpack-plugin`
* Create config file: `touch webpack.config.js`
* Setup the basic config:

```js
module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: "./dist",
    filename: "index_production.js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
};
```

* Run `webpack` to render `bin/app.bundle.js`

### Setup webpack with babel

* Install babel core: `yarn add --dev babel-core`
* Install babel loader: `yarn add --dev babel-loader`
* Install babel for react: `yarn add --dev babel-preset-react`
* Add loader in webpack:

```js
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

```js
{
  "presets": [
    "es2015",
    "react",
  ]
}
```

## Setup webpack with ES6

* ref: https://es6.io/account/access/578d8172cf4f29f533cd4280/view/174357593

### Setup HTMLWebpackPlugin

* ref: https://github.com/ampedandwired/html-webpack-plugin
* Add plugin to `webpack.config.js`:

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  //...

  plugins: [
    HtmlWebpackPluginConfig,
  ],
};
```

### Setup React and ReactDom

* ref: https://facebook.github.io/react/
* ref: https://www.npmjs.com/package/react-dom
* Install react: `yarn add react`
* Install react-dom: `yarn add react-dom`

### Setup sourcemaps
### Setup SASS

* ref: https://github.com/webpack/extract-text-webpack-plugin
* ref: https://github.com/webpack/css-loader
* ref: https://github.com/jtangelder/sass-loader
* ref: http://www.davidmeents.com/journey-into-react-part-4-styling-with-scss-and-webpack/
* Install extract-text-webpack-plugin: `yarn add --dev extract-text-webpack-plugin`
* Install css-loader: `yarn add --dev css-loader`
* Install sass-loader: `yarn add --dev sass-loader`
* Install style-loader: `yarn add --dev node-sass`
* Add a new loader to webpack.config.js:

```
module.exports = {

  // ...

  module: {
    loaders: [
      {
        // ...
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!sass"),
      },
    ],
  },
```

* Prevent mocha from compiling css by installing the following in the `spec_helper.js` file:

```
// Prevent Mocha from compiling class
function noop() {
  return null;
}

require.extensions[".css"] = noop;
require.extensions[".scss"] = noop;
```

* Add the plugin config:

```
const ExtractTextPluginConfig = new ExtractTextPlugin(
  "index.css",
  { allChunks: true }
);
```

* Install the plugin:

```
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ],
```

* Import css files into component files, like so:

```js
// header.jsx

import styles from "../stylesheets/header.scss";

```




### Setup ESLint

* ref: http://eslint.org
* ref: https://github.com/dustinspecker/awesome-eslint
* install global: `yarn add eslint -g`
* install local: `yarn add eslint --dev`
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
yarn add -g eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
```

  * install airbnb config local:

```
yarn add --dev eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
```

* In `.eslintrc`, change `"extends": "airbnb"`
* Add `eslint-plugin-html` with `yarn add -g eslint-plugin-html`
* Add `eslint-plugin-html` with `yarn add --dev eslint-plugin-html`
* Add plugin settings to `.eslintrc`

### Setup Mocha, Chai, Enzyme, Sinon/Test Double

* ref: https://mochajs.org
* ref: http://chaijs.com
* ref: https://github.com/airbnb/enzyme
* ref: https://github.com/producthunt/chai-enzyme
* Add `mocha` with `yarn add mocha --dev`
* Add `chai` with `yarn add chai --dev`
* Add `enzyme` with `yarn add enzyme --dev`
* Add `chai-enzyme` with `yarn add chai-enzyme --dev`
* Add `react-addons-test-utils` with `yarn react-addons-test-utils --dev`
* Add a `spec_helper.js` file with `touch specs/spec_helper.js` with these instructions:

```js
import chai from "chai";
import chaiEnzyme from "chai-enzyme";

chai.use(chaiEnzyme());
```

* Add a test runner script to `package.json`:

```js
"scripts": {
    // ...
    "test": "mocha './specs/**/*_spec.js' --compilers js:babel-core/register --require './specs/spec_helper.js'"
    // ...
  }
```

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

### CSS

* Utilize Flexbox wherever possible
* ref: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
