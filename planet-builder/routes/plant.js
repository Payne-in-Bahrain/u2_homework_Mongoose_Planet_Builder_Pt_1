const express = require('express')
const router = express.Router()
const plantCtrl = require('../controllers/plant')

router.post('/planets/:id/plant', plantCtrl.create)

module.exports = router
