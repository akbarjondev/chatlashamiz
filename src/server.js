// const express = require('express')
const ejs = require('ejs')

const { verify } = require('./jwt/jwt.js')
const HOME = require('./modules/home/home.js')

const run = (app, express) => {

	app.engine('html', ejs.renderFile)
	app.set('view engine', 'html')
	app.use(express.static('static'))

	app.use(async (req, res, next) => {

		if(req.url === '/login' || req.url === '/register') {
			next()
		} else {
			try {
				await verify(req.headers.token)
				next()
			} catch(e) {
				res.status(401).send({ error: e })
			}
		}
	})

	app.get('/', HOME.GET)

}

module.exports.run = run
