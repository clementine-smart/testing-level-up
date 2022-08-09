const express = require('express')
const path = require('path')

const server = express()

module.exports = server

server.get('/', (req, res) => {
  res.send('test')
})
