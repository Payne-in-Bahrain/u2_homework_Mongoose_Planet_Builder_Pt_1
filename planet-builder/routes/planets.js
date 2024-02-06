var express = require('express')
var router = express.Router()
const planetCtrl = require('../controllers/planets')

/* GET users listing. */
router.get('/', planetCtrl.index)

router.get('/new', planetCtrl.newPlanet)

router.post('/', planetCtrl.addNewPlanet)

module.exports = router
