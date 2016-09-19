# Simply Events Client for Browser

### Setup Node & NPM

* Upgrade brew: `brew upgrade`
* Fix brew: `brew doctor`
* Check node version: `node -v`
* Set latest node version: `node latest`
* Check npm version: `npm -v`
* Update npm: `npm install npm@latest -g`
* Update packages: `npm update`
* Test update status: `npm outdated`


### Follow Create-App file structure
### Setup Webpack

* ref: https://webpack.github.io
* ref: https://github.com/d3viant0ne/awesome-webpack

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
