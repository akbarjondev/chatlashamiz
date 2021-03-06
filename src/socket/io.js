const socket = require('socket.io')

const run = (server) => {
	
	const IO = socket(server)

	IO.on('connection', (client) => {
		console.log('client connected')

		client.on('disconnect', () => {
			console.log('client disconnected...')
		})

		client.emit('message', { msg: 'salom' })
	})

}	

module.exports.run = run
