const express = require('express')
const mongoose = require('mongoose')
const questions = require('./routes')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use('/', questions)


mongoose.connect(process.env.DATABASE, () => {
  console.log('Mongo connected')
})
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running')
})