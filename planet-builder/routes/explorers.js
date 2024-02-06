const express = require('express');
const router = express.Router();
const explorersCtrl = require('../controllers/explorers');

// This router is mounted to a "starts with" path of '/'
router.get('/explorers/new', explorersCtrl.new);

router.post('/explorers', explorersCtrl.create);

router.post('/planets/:id/explorers', explorersCtrl.addToExplorers)

module.exports = router;