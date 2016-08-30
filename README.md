# npm-depended-upon

Fetch a list of npm modules which depend on a specific module.

## Installation:

```sh
$ npm i pdehaan/npm-depended-upon -S
```

## Usage:

```js
const { dependedUpon } = require('npm-depended-upon');

dependedUpon('fs')
  .then((modules) => console.log(modules));
```
