const express = require('express')
const router = express.Router()
const explorersCtrl = require('../controllers/explorers')
router.get('/new', explorersCtrl.newExplorer)
router.get('/index', explorersCtrl.showExplorer)
router.post('/', explorersCtrl.createExplorer)
router.post('/planets/:id/explorers', explorersCtrl.submitExplorer)
module.exports = router
