'use strict'
exports.main_handler = (req, res) => {
  console.log(req)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<p>Hello World</p>')
}
