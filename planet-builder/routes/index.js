var express = require('express')
var router = express.Router()
const planetsCtrl = require('../controllers/planets')
/* GET home page. */
router.get('/', planetsCtrl.index)

module.exports = router
