const express = require('express')
const router = express.Router()
const planetsCtrl = require('../controllers/planets')
router.get('/new', planetsCtrl.newPlanet)
router.post('/', planetsCtrl.createPlanet)
router.get('/:id', planetsCtrl.show)
router.get('/', planetsCtrl.index)
router.post('/:id/animals', planetsCtrl.newAnimal)
module.exports = router
