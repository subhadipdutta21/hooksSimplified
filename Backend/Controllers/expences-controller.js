const Expences = require('../Models/Expences')

const createExpence = (req, res) => {
    console.log(req.body)
    const expencesData = {
        amount: req.body.amount,
        text: req.body.text
    }
    Expences.create(expencesData)
        .then(response => res.status(200).json({ status: 'Added successfully' }))
        .catch(err => res.send(err))
}

const getAllExpences = (req, res) => {
    Expences.find()
        .then(expences => res.status(200).json( expences ))
        .catch(err => res.json({ err: err }))
}

const deleteExpence = (req,res) => {
    console.log('delete controller',req.body.id)
    Expences.findByIdAndDelete(req.body.id)
        .then(result => res.status(200).json(result))
        .catch(err=> res.json(err))
}

exports.createExpence = createExpence
exports.getAllExpences = getAllExpences
exports.deleteExpence = deleteExpence


