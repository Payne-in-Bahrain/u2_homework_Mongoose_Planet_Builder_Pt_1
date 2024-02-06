const express = require("express")
const router = express.Router()
const animalsCtrl = require("../controllers/animals")
// You Do - Require the yet to be created animals controller
router.post("/planets/:id/animals", animalsCtrl.create)

// You Do - Define the Route below

module.exports = router
