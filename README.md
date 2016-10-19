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
  index.js
  index.html
specs/
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
* ref: https://github.com/d3viant0ne/awesome-webpack
* Install globally: `yarn add webpack -g`
* Install locally: `yarn add --dev webpack`
* Install dev tools: `yarn add --dev webpack-dev-server`
* Install webpack html module: `yarn add --dev html-webpack-plugin`
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

* Install babel core: `yarn add --dev babel-core`
* Install babel loader: `yarn add --dev babel-loader`
* Install babel for react: `yarn add --dev babel-preset-react`
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

* Install react: `yarn add --save react`
* Install react-dom: `yarn add --save react-dom`

### Setup sourcemaps
### Setup SASS
### Setup Flexbox

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
