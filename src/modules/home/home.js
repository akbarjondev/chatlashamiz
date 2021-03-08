const { verify } = require('./../../jwt/jwt.js')

const GET = async (req, res) => {

		console.log('salom')
	try {
		verify(req.headers.token)

		res.renderFile('index.html')
	} catch(e) {
		res.status(401).send({ error: e })
	}

}

module.exports = {
	GET,
}