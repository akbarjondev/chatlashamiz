const express = require('express')
const socket = require('socket.io')
const http = require('http')
const ejs = require('ejs')

const PORT = 4000

const app = express()
const server = http.createServer(app)
const IO = socket(server)

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.use(express.static('static'))

app.get('/', (req, res) => {
	res.send('ok')
})

server.listen(PORT, () => console.log(`ready at http://localhost:${PORT}`))
