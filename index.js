const socket = require('socket.io')
const express = require('express')
const http = require('http')
const ejs = require('ejs')

const app = express()
const server = http.createServer(app)
const IO = socket(server)

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.use(express.static('static'))

app.get('/', (req, res) => {

	res.renderFile('index.html')
})

IO.on('connection', (client) => {
	console.log('client connected')

	client.on('disconnect', () => {
		console.log('client disconnected...')
	})
})

server.listen(4000, () => console.log(`ready at http://localhost:4000`))
