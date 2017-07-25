const isXhrRequest = req => {
  return req.xhr || req.headers.accept.indexOf('json') > -1
}

module.exports = isXhrRequest
