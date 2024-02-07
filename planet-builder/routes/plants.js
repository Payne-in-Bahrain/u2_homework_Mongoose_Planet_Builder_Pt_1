const express = require('express')
const router = express.Router()

const plantCtrl = require('../controllers/plants')

router.post('/planets/:id/plants', plantCtrl.create)

module.exports = router