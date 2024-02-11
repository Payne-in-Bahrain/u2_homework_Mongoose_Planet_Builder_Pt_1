const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

// POST /movies/:id/reviews (create review for a movie)
router.post('/planets/:id/plants', plantsCtrl.create);

module.exports = router;