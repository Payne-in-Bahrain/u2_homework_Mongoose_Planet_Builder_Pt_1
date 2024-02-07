const express = require('express');
const router = express.Router();
const explorerCtrl = require('../controllers/explorer');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/explorers/new', explorerCtrl.new);
// POST /performers (create functionality)
router.post('/explorers', explorerCtrl.create);
// POST /movies/:id/performers (associate performers with movies)
router.post('/planets/:id/explorers', explorerCtrl.addToExplorer)

module.exports = router;