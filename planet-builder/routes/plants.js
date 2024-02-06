const express = require('express');
const router = express.Router();
const platnsCtrl = require('../controllers/plants');

// POST /movies/:id/reviews (create review for a movie)
router.post('/planets/:id/plants', platnsCtrl.create);

module.exports = router;