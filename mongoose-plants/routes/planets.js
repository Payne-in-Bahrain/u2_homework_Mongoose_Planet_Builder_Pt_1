var express = require('express');
var router = express.Router();

const planetCtrl = require('../controllers/planets')

router.get('/new', planetCtrl.new)
router.post('/', planetCtrl.create)

router.get('/', planetCtrl.index)

module.exports = router;
