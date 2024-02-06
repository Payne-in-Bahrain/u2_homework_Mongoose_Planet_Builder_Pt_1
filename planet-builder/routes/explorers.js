const express = require('express')
const router = express.Router()
const explorersCtrl = require('../controllers/explorers')

router.get('/explorers/new', explorersCtrl.new)

router.post('/explorers', explorersCtrl.create)

router.post('/planets/:id/explorers', explorersCtrl.addToExplorer)

module.exports = router
