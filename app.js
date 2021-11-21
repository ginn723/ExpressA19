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

app.get('/:page', (req, res) => {
  const page = req.params.page
  res.render(page, {
    title: page //傳入頁面title
  })
})


app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
