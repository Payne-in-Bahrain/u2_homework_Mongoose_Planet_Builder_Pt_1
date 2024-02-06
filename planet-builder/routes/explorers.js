const express = require('express')
const router = express.Router()
const explorerCtrl = require('../controllers/explorers')

router.get('/explorers/new', explorerCtrl.newExplorer)
router.get('/explorers', explorerCtrl.allExplorers)
router.post('/explorers', explorerCtrl.create)
router.post('/planets/:planetId/explorers', explorerCtrl.addToPlanet)

module.exports = router
