const express = require('express')
const router = express.Router()
// You'll be creating this controller module next
const plantsCtrl = require('../controllers/plants')

router.post('/planets/:id/plants', plantsCtrl.create)

module.exports = router
