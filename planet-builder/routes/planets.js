var express = require('express')
var router = express.Router()
const planetsCtrl = require('../controllers/planets')

/* GET users listing. */
router.get('/', planetsCtrl.index)
router.get('/new', planetsCtrl.newPlanet)
router.get('/:id', planetsCtrl.show)
router.post('/', planetsCtrl.create)

module.exports = router
