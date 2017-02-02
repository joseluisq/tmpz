# tmpz

> Copy a file or directory to OS temporary directory with a random name. Also you can remove it later.

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

  // Removing the temp dir in 6 seconds
  setTimeout(() => tmpz.remove(dest), 7000)
} catch (err) {
  console.error(err)
}
```

## License
MIT license

© 2017 [José Luis Quintana](http://quintana.io)
