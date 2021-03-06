const Pool = require('pg').Pool

const pool = new Pool({
	user: 'postgres',
	password: '11235',
	database: 'chatlashamiz',
	port: 5432,
	host: 'localhost'
})

const fetch = async (SQL, ...params) => {

	const client = await pool.connect()
	console.log('connection')

	try {

		const data = await client.query(SQL, params)
		return data.rows
		
	} catch(e) {

		console.log(e)

	} finally {

		client.release()
		console.log('connection lost')

	}
}

module.exports.fetch = fetch
