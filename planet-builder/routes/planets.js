var express = require('express')
var router = express.Router()
const planetCtrl = require('../controllers/planet')

/* GET users listing. */
router.get('/', planetCtrl.index)

router.get('/new', planetCtrl.new)

router.post('/', planetCtrl.create)

module.exports = router
