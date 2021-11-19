const express = require('express')
const app = express()
const port = 3000
const hbs = require('express-handlebars').create({
  defaultLayout: 'main', //默認佈局模板為 main.hbs
  extname: '.hbs' //設置文件後綴名為.hbs
})

// setting template engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('homepage', {
    title: '首頁' //傳入頁面title
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  })
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio', {
    title: 'Portfolio'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  })
})



app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})