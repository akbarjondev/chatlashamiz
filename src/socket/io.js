const socket = require('socket.io')

const run = (server) => {
	
	const IO = socket(server)

	const users = []

	IO.on('connection', (client) => {
		console.log('client connected')

		client.on('disconnect', () => {
			console.log('client disconnected...')

			const findedUserIndex = users.findIndex(u => {
				if(u.user_id === client.id) {

					IO.emit('user_disconnect', { left_user: u.username })

					return true
				}
			})
			if(findedUserIndex >= 0) {
				users.splice(findedUserIndex, 1)
			}

			console.log(users)
		})

		client.on('login', ({ username }) => {
			
			if(users.findIndex(u => u.username === username) === -1) {
				users.push({
					username: username,
					user_id: client.id
				})

				client.broadcast.emit('new_login', { username })
			} else {
				users.map(u => u.username === username ? u.user_id = client.id : undefined)
			}
		})
	
	})

}

module.exports.run = run
