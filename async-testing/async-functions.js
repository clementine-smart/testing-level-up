const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'file.text')

function getFile(filePath, callBack) {
  fs.readFile(filePath, 'utf8', (err, contents) => {
    if (err) {
      console.log(err)
    }
    callBack(null, contents)
  })
}

getFile(filePath, (err, contents) => {
  if (err) {
    console.error(err.message)
  }
  console.log(contents)
})

module.exports = {
  getFile,
}
