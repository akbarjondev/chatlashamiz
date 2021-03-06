const express = require('express')
const http = require('http')

const serverHandler = require('./src/server.js')
const socketHandler = require('./src/socket/io.js')

const app = express()
const server = http.createServer(app)

serverHandler.run(app)
socketHandler.run(server)

server.listen(4000, () => console.log(`ready at http://localhost:4000`))
