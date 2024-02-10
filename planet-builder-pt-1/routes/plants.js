var express = require("express")
var router = express.Router()

const planetsCtrl = require("../controllers/plants")

router.post("/planets/:id/plants", planetsCtrl.create) 


module.exports = router