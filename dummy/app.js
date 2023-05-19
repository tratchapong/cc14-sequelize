require('dotenv').config()
const express = require('express')
const notFound = require('./middlewares/notFound')
const error = require('./middlewares/error')
const todoRoute = require('./routes/todoRoute')

const app = express()

app.use('/todos', todoRoute)
app.use('/user', ()=>{})

app.use(notFound)
app.use(error)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on port', port))
