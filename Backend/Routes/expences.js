const express = require('express')
const router = express.Router()
const expencesController = require('../Controllers/expences-controller')

router.post('/add',expencesController.createExpence)
router.get('/getall', expencesController.getAllExpences)
router.post('/deleteexpence', expencesController.deleteExpence)

module.exports = router