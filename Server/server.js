const express = require('express')
const app = express()
const { port } = require('./config')

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Algo Trading server is live at localhost:${port}`)
})
