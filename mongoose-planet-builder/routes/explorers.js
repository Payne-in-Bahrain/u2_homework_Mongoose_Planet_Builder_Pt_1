const express = require('express')
const router = express.Router()
const explorersCtrl = require('../controllers/explorers')
//-------------------------------------------------------------------//

// This router is mounted to a "starts with" path of '/'

// GET /explorers/new (new functionality)

router.get('/explorers/new', explorersCtrl.newExplorer)

// GET /explorers

router.get('/explorers', explorersCtrl.index)

// POST /explorers (create functionality)

router.post('/explorers', explorersCtrl.create)


// POST /movies/:id/performers (associate performers with movies)

router.post('/planets/:id/explorers', explorersCtrl.addToAstro)



// POST /explorers
//-------------------------------------------------------------------//
module.exports = router
