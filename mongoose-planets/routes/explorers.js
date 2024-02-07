const express = require('express')
const router = express.Router()
const explorersCtrl = require('../controllers/explorers')

router.get('/explorers/new', explorersCtrl.newExplorers)

router.get('/explorers', explorersCtrl.index)

router.post('/explorers', explorersCtrl.create)

router.post('/planets/:id/explorers', explorersCtrl.addToPlanet)

module.exports = router
