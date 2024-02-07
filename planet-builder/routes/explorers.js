const express = require('express')
const router = express.Router()

const explorerCtrl = require('../controllers/explorers')

router.get('/explorers', explorerCtrl.index)
router.get('/explorers/new', explorerCtrl.new)
router.post('/explorers', explorerCtrl.create)
router.post('/planets/:id/explorers', explorerCtrl.addToExplorers)

module.exports = router
