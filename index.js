const express = require('express')
const app = express()
const server = require('http').createServer(app)
const router = require('./routes')
const proxy = require('express-http-proxy')
const fs = require('fs')
let port = 3000

try {
  port = fs.readFileSync('port', 'utf8')
  console.log('input port: ' + port)
} catch(error) {
  console.log(error.stack)
}

app.use(express.static(__dirname + '/static'))
app.use('/hello1', proxy('localhost:4000'))
app.use('/hello2', proxy('localhost:5000'))
app.use('/', router)

server.listen(port, function() {
  console.log('Live at Port ' + port)
})
