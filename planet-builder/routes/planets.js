const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const planetsCtrl = require('../controllers/planets');
	
router.get('/', planetsCtrl.index);
// GET /planets/new
router.get('/new', planetsCtrl.newPlanet);

///
router.get('/:id', planetsCtrl.show);
// POST /planets
router.post('/', planetsCtrl.create);



//router.post("/:planetId/plants", moviesCtrl.createPlant)



module.exports = router;