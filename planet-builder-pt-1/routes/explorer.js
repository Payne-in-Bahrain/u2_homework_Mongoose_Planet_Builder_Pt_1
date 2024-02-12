const express = require("express")
const router = express.Router()
const explorerCtrl = require("../controllers/explorer")

router.get("/explorers/new", explorerCtrl.new)

// router.get('/explorers',explorerCtrl.show )

router.post('/explorers', explorerCtrl.create )

router.post('/planets/:planetsId/explorers',explorerCtrl.addToExplorer )

module.exports = router
