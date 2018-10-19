const path = require('path')
const http = require('http')
const express = require('express')
const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000
const socketIO = require('socket.io')

const app = express()
server = http.createServer(app)
const io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection',(socket) => {
  console.log('Client connected')

  socket.on('disconnect',(socket) => {
    console.log('Client disconnected')
  })
})

server.listen(port, () => {
  console.log('Server is running on ' + port)
})