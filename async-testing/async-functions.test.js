const { getFile } = require('./async-functions')
const path = require('path')

test('getFile returns the file', (done) => {
  // arrange
  const filePath = path.join(__dirname, 'file.text')
  const expected = 'test'
  // act
  getFile(filePath, (err, contents) => {
    // assert
    expect(contents).toMatch(expected)
    done()
  })
})
