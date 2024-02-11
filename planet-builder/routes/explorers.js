const express = require('express');
const router = express.Router();
const explorersCtrl = require('../controllers/explorers');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/explorers/new', explorersCtrl.newExplorer);
// POST /performers (create functionality)
router.post('/explorers', explorersCtrl.create);

// POST /movies (create functionality)
router.post('/planets/:id/explorers', explorersCtrl.addToTeam);
module.exports = router;