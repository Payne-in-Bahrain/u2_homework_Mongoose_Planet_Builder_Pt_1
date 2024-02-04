const express = require('express')
const router = express.Router()
const planetsCtrl = require('../controllers/planets')

//GET/new

router.get('/new', planetsCtrl.newPlanet)

router.post('/', planetsCtrl.create)

router.get('/', planetsCtrl.index)

module.exports = router
