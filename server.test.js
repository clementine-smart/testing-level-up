const request = require('supertest')
const server = require('./server')

test('GET test the root route', (done) => {
  // arrange
  const text = 'test'
  // act
  request(server)
    .get('/')
    .expect(200)
    // asserting
    .end((err, res) => {
      expect(res.status).toBe(200)
      expect(res.text).toContain(text)
      done()
    })
})
