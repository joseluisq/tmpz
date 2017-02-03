const fs = require('fs')
const tmpz = require('./')
const test = require('tape')

test('Test suite', t => {
  t.plan(5)

  const dest = tmpz.copy('./')

  t.ok(fs.existsSync(dest), 'Directory should be created and should be exist.')

  t.throws(() => {
    tmpz.copy('/tmp/unknown_file1')
  }, /ENOENT: no such file or directory/, 'Unknown dir copy should throw an error.')

  t.throws(() => {
    tmpz.remove('/tmp/unknown_file2')
  }, /undefined/, 'Unknown dir remove should return `undefined`.')

  t.throws(() => {
    tmpz.remove()
  }, /missing path/, 'Throw an error when path is empty.')

  tmpz.remove(dest)

  t.notOk(fs.existsSync(dest), 'When directory was removed this should not be exist.')
})
