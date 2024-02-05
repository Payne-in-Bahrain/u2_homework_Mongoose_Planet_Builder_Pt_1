const express = require('express')
const router = express.Router()
const enviromentCtrl = require('../controllers/enviroments')

router.post('/planets/:id/enviroments', enviromentCtrl.create)

module.exports = router
