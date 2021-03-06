const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('./secret.js')

module.exports = {
	sign: (data) => jwt.sign(data, TOKEN_SECRET, { expiresIn: '1800s' }),
	verify: (token) => jwt.verify(token, TOKEN_SECRET)
}
