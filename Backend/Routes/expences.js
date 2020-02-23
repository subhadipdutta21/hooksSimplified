const express = require('express')
const router = express.Router()
const expencesController = require('../Controllers/expences-controller')

router.post('/add',expencesController.createExpence)

module.exports = router