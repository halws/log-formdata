# @halws/log-formdata

[![npm version](https://badge.fury.io/js/log-formdata.svg)](https://badge.fury.io/js/log-formdata)


Simple snippet to `console.log` FormData values

## Install

```
$ npm install log-formdata --save-dev
```

## Usage

```js
const logFormData = require("log-formdata");
// or use import statement 
// import logFormData from "log-formdata"

const newFormData = new FormData();

newFormData.append('superKey', 'ExtraValue');

logFormData(newFormData);
//=> superKey, ExtraValue

logFormData("123");
//=>Uncaught TypeError: Isn't a FormData object!
```