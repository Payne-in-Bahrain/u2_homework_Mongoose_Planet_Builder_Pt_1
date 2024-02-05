const express = require('express')
const router = express.Router()

//require the movie controller module
const planetsCtrl = require('../controllers/planets')

//GET /planets/new
router.get('/new', planetsCtrl.newPlanet)

//POST /planets
router.post('/', planetsCtrl.create)

router.get('/', planetsCtrl.index)

module.exports = router
