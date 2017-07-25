module.exports = (error, req, res, next) => {
  res.status(error.statusCode).render('error', { error })
}
