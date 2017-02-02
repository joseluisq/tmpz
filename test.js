const tmpz = require('./')

const dest = tmpz.copy('./my_directory')
console.log(dest)
// > /tmp/393a6d0851bb6c10214f92bbaa9c833d

// Delete temp dir in 6 seconds
setTimeout(() => tmpz.remove(dest), 6000)
