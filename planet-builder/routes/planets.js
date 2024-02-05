const express = require('express')
const router = express.Router()
const planetsCtrl = require('../controllers/planets')

router.get('/new', planetsCtrl.newPlanet)

router.get('/', planetsCtrl.show)

router.post('/', planetsCtrl.createPlanet)

module.exports = router
