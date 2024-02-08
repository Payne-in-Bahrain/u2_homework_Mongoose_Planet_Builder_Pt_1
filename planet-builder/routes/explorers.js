var express = require('express')
var router = express.Router()
const explorersCtrl = require('../controllers/explorers')

router.get('/explorers/new', explorersCtrl.new)
router.get('/explorers', explorersCtrl.showExplorers)
router.post('/explorers', explorersCtrl.create)
router.post('/planets/:planetId/explorers', explorersCtrl.addToPlanet)

module.exports = router
