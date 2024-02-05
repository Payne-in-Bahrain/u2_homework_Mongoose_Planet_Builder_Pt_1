var express = require("express")
var router = express.Router()

const planetsCtrl = require("../controllers/planets")

router.post("/", planetsCtrl.create)

router.get("/new", planetsCtrl.new)

router.get("/", planetsCtrl.index)

module.exports = router
