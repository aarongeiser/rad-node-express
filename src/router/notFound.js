const isXhrRequest = require('../lib/isXhrRequest')

const notFound = (req, res, next) => {
  const status = 404
  if (isXhrRequest(req)) {
    res.status(status).send({ status, message: 'Not found.' })
  } else {
    res.status(status).render('not-found', { status })
  }
}

module.exports = notFound
