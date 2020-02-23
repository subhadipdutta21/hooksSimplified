const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const uri = config.get('URI')

const app = express()

const expencesRoute = require('./Routes/expences')

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) console.log('connnection error ', err)
    else {
        console.log('mongodb connected')
        app.listen(5000)
    }
})


app.use('/expences', expencesRoute)