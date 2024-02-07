const express = require('express')
const router = express.Router()
const explorersCtrl = require('../controllers/explorers')

//GET /explorer/new function
router.get('/explorers/new', explorersCtrl.newExplorer)

//POST
router.post('/explorers', explorersCtrl.create)

router.post('/planets/:id/explorers', explorersCtrl.addToPlanet)

module.exports = router
