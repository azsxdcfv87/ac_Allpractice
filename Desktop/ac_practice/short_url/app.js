const { urlencoded } = require('body-parser')
const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')

const app = express()
const port = 3000


app.engine('handlebars', exphbs.engine({ defaultLayout: 'main', extname: '.handlebars' }))
app.set('view engine', 'handlebars')

app.use(express, urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`APP is running http://localhost:${port}`)
})
