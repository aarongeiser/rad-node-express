module.exports = (error, req, res, next) => {
  console.log('Error =========>', (error.stack || error.message || error))
  next(error)
}
