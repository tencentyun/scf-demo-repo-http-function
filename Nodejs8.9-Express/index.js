const app = require('express')()

app.get('/', (req, res) => {
  res.send('hello from Express')
})

exports.main_handler = app
