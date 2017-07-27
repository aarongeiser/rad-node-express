const express = require('express')
const handlers = require('./handlers')
const router = express.Router()

module.exports = app => {

  // default routes
  router.get('/', handlers.home)

  return router
}
