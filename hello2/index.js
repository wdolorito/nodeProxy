const express = require('express')
const app = express()
const server = require('http').createServer(app)
const router = require('./routes')
const fs = require('fs')
var port = 3000
const pid = '../hello2.pid'

try {
  port = fs.readFileSync(__dirname + '/port', 'utf8')
  console.log('input port: ' + port)
} catch (error) {
  console.log(error.stack)
}

fs.writeFile(pid, process.pid, err => {
  if(err) {
    console.log(err.stack)
  }
})

app.use('/', router)

server.listen(port, function() {
  console.log('Live at Port ' + port)
})
