const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const planetsCtrl = require('../controllers/planets');
	
// GET /planets/new
router.get('/new', planetsCtrl.newPlanet);
// POST /planets
router.post('/', planetsCtrl.create);

router.get('/', planetsCtrl.index);

module.exports = router;