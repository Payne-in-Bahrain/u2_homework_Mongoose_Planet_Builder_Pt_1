var express = require('express');
var router = express.Router();

const planetCtrl = require('../controllers/planets')


router.get('/', planetCtrl.index)

router.get('/new', planetCtrl.new)

router.get('/:id', planetCtrl.show);

router.post('/', planetCtrl.create)



module.exports = router;
