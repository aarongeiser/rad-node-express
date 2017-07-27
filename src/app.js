const http = require('http')
const express = require('express')
const app = express()
const ejs = require('ejs')
const router = require('./router')
const bodyParser = require('body-parser')
const server = http.createServer(app)
const { logErrors, clientErrorHandler, errorHandler } = require('./router/errorHandlers')
const notFound = require('./router/notFound')
const { NODE_PORT } = process.env

// view engine
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router(app))

/**
 * /error-test route is used to demonstrate error-handling
 * issue a GET to /error-test to receive HTML page
 * issue a GET to /error-test and include header {'Accept': 'application/json'} to receive JSON response object
 */
app.use('/error-test', (req, res, next) => {
	const e = new Error('test error!')
	e.statusCode = 500
	next(e)
})

// 404 Not Found
app.use(notFound)

//error handling
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

//initialize
server.listen(NODE_PORT, () => {
	console.log(`Application running on port: ${NODE_PORT}`)
});
