const path = require('path')
const tmpdir = require('os').tmpdir()
const crypto = require('crypto')
const fs = require('fs-extra')

function randomString (length) {
  return crypto.randomBytes(Math.round(length / 2)).toString('hex')
}

module.exports = {
  copy: (src) => {
    const dest = path.join(tmpdir, randomString(32))

    try {
      fs.copySync(src, dest)
      return dest
    } catch (err) {
      console.error(err)
    }
  },

  remove: (dest) => {
    try {
      if (dest) {
        fs.removeSync(dest)
        return dest
      }
    } catch (err) {
      console.error(err)
    }
  }
}
