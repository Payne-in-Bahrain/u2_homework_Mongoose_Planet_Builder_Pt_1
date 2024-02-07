const express = require('express')
const router = express.Router()

const plantsCtrl = require('../controllers/plants')

//POST /movies/:id/reviews
router.post('/planets/:id/plants', plantsCtrl.create)

module.exports = router
