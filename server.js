const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')

const server = express()

module.exports = server

server.engine('hbs', engine({ extname: 'hbs' }))

server.set('view engine', 'hbs')
server.set('views', './views')

server.get('/', (req, res) => {
  res.send('test')
})

server.get('/home', (req, res) => {
  res.render('test')
})
