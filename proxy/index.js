const express = require('express')
const app = express()
const server = require('http').createServer(app)
const router = require('./routes')
const proxy = require('express-http-proxy')
const port = 3000

app.use('/hello1', proxy('localhost:4000'))
app.use('/hello2', proxy('localhost:5000'))
app.use('/', router)

server.listen(port, function() {
  console.log('Live at Port ' + port)
})
