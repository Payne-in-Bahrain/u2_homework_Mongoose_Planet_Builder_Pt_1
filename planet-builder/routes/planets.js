const express = require('express')
const router = express.Router()
const planetCtrl = require('../controllers/planets')

router.get('/new', planetCtrl.newPlanet)
router.post('/', planetCtrl.create)
router.get('/', planetCtrl.index)
router.get('/:id', planetCtrl.show)

module.exports = router
