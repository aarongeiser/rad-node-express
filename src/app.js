const http = require('http')
const express = require('express')
const app = express()
const ejs = require('ejs')
const router = require('./router')
const bodyParser = require('body-parser')
const server = http.createServer(app)

const { NODE_PORT } = process.env

// view engine
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

// req/res
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router(app))

//initialize
server.listen(NODE_PORT, () => {
	console.log(`Application running on port: ${NODE_PORT}`)
});
