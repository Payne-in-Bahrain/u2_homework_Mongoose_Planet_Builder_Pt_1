const express = require('express')
const router = express.Router()
// You'll be creating this controller module next
const planetsCtrl = require('../controllers/planets')

// GET /movies/new
router.get('/new', planetsCtrl.new)
router.post('/', planetsCtrl.create)
router.get('/', planetsCtrl.index)

module.exports = router
