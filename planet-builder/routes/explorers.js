const express = require("express")
const router = express.Router()
const explorersCtrl = require("../controllers/explorers")

router.get("/explorers/new", explorersCtrl.newExplorer)
router.post("/explorers", explorersCtrl.create)
router.post("/planetts/:id/explorers", explorersCtrl.addExplorer)

module.exports = router
