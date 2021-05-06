const express = require('express')
const path = require('path')

const viewPath = path.join(__dirname, '../views')
const publicPath = path.join(__dirname, '../public')

const app = express()
app.set('view engine', 'hbs')
app.set('views', viewPath)

app.use(express.static(publicPath))

app.get('', (req, res)=>{
    res.render('index')
})

app.listen('3000', ()=>{
    console.log('Server start')
})