const express = require('express');
const router = express.Router();
const animalsCtrl = require('../controllers/animals')


router.post('/planets/:id/animals', animalsCtrl.create)

module.exports = router;