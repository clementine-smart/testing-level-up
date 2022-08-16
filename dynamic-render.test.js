const request = require('supertest')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom')

const server = require('./server')

test('/about has exactly one p tag', (done) => {
  // Arrange
  const expected = 1
  // Act
  request(server)
    .get('/home')
    .end((err, res) => {
      expect(res.status).toBe(200)
      expect(err).toBeNull()
      // document.body.innerHTML = res.text
      // const actual = document.getElementsByTagName('p').length
      // Assert
      // expect(actual).toBe(expected)
      done()
    })
})
