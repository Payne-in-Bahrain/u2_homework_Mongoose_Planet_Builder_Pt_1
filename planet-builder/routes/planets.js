var express = require('express')
var router = express.Router()
const planetsCtrl = require('../controllers/planets')

/* GET users listing. */
router.get('/new', planetsCtrl.newPlanet)
router.get('/', planetsCtrl.index)
router.post('/', planetsCtrl.create)

module.exports = router
