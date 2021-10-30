const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/S1', (req, res) => {
    res.send('Hello World! S1')
  })

  app.get('/S2', (req, res) => {
    res.send('Hello World! S2')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})