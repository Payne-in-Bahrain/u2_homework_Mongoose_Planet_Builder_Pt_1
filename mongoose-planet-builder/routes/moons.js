const express = require('express')
const router = express.Router()
const moonsCtrl = require('../controllers/moons')

// POST /planets/:id/moons

router.post('/planets/:id/moons', moonsCtrl.createMoon)

// export router
module.exports = router
