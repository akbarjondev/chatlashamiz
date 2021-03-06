const express = require('express')
const ejs = require('ejs')

const run = (app) => {

	app.engine('html', ejs.renderFile)
	app.set('view engine', 'html')
	app.use(express.static('static'))

	app.get('/', (req, res) => {

		res.renderFile('index.html')
	})

}

module.exports.run = run
