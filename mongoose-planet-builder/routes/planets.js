var express = require('express')
var router = express.Router()
const planetsCtrl = require('../controllers/planets')

// get /planets/new

router.get('/new', planetsCtrl.newPlanet)

// GET /planets/:id (show functionality) MUST be below new route

router.get('/:id', planetsCtrl.show);

//GET /planets

router.get('/', planetsCtrl.index)

// POST /planets

router.post('/', planetsCtrl.create)

module.exports = router
