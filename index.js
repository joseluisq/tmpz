const path = require('path')
const tmpdir = require('os').tmpdir()
const crypto = require('crypto')
const fs = require('fs-extra')

const randName = len => crypto.randomBytes(Math.round(len / 2)).toString('hex')

module.exports = {
  copy: src => {
    const dest = path.join(tmpdir, randName(32))

    try {
      fs.copySync(src, dest)
      return dest
    } catch (err) {
      throw err
    }
  },

  remove: dest => {
    try {
      fs.removeSync(dest)
      return dest
    } catch (err) {
      throw err
    }
  }
}
