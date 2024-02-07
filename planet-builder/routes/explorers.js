const express = require('express')
const router = express.Router()
const explorersCtrl = require('../controllers/explorers.js')

router.get('/explorers/new', explorersCtrl.new)
router.post('/explorers', explorersCtrl.create)
// Just added for the explorers
router.get('/explorers', explorersCtrl.index)

router.post('/planets/:id/explorers', explorersCtrl.addToExplorers)

module.exports = router
