require('dotenv').config()
const express = require('express')
const path = require('path');
const db = require('../db')
const colors = require('colors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./router')

const public = path.join(__dirname, '../', 'client', 'dist')
console.log(public)

const app = express()

app.use('/api', router)
app.use(express.static(public))

app.use(morgan('dev'));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.PORT, () => {
    console.log(`SERVER ON @ ${process.env.PORT}`.yellow.bold)
});