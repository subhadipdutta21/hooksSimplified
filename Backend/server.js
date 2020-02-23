const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')

const uri = config.get('URI')

const app = express()
app.use(bodyParser.json())
app.use(cors()) 

const expencesRoute = require('./Routes/expences')

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) console.log('connnection error ', err)
    else {
        console.log('mongodb connected')
        app.listen(5000)
    }
})


app.use('/expences', expencesRoute)