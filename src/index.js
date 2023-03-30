const express = require('express')
const app = express()
const port = 3000
const routerMyApi = require('./routes/main_routes');

app.get('/', (req, res) => {
  res.send('My API test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})