const isXhrRequest = require('../../lib/isXHrRequest')

module.exports = (error, req, res, next) => {
  const status = error.statusCode || 500
  const message = error.message || 'An unexpected error has occurred.'
  if (isXhrRequest(req)) {
    res.status(status).send({ status, message })
  } else {
    next(error)
  }
}
