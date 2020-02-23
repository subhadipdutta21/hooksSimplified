const mongoose = require('mongoose')

const ExpencesSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

const Expences = mongoose.model('Expences', ExpencesSchema)

module.exports = Expences