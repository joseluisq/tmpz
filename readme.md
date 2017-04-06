# tmpz [![Build Status](https://travis-ci.org/joseluisq/tmpz.svg?branch=master)](https://travis-ci.org/joseluisq/tmpz) [![Coverage Status](https://coveralls.io/repos/github/joseluisq/tmpz/badge.svg?branch=master)](https://coveralls.io/github/joseluisq/tmpz?branch=master) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/joseluisq/tmpz.svg)](https://greenkeeper.io/)

> Copy a file or directory to OS temporary directory with a random name. Also you can remove it later.

## Prerequisites

[NodeJS](https://nodejs.org) v4.0 or greater.

## Install

```sh
npm install tmpz --save-dev
```

## Usage

```js
const tmpz = require('tmpz')

try {
  const dest = tmpz.copy('./my_directory')

  console.log(dest)
  // > /tmp/393a6d0851bb6c10214f92bbaa9c833d

  // Removing the temp dir in 7 seconds
  setTimeout(() => tmpz.remove(dest), 7000)

} catch (err) {
  console.error(err)
}
```

## License
MIT license

© 2017 [José Luis Quintana](http://quintana.io)
