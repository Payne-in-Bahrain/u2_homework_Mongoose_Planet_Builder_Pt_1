var express = require("express")
var router = express.Router()

const planetsCtrl = require("../controllers/planets")

router.get("/", planetsCtrl.index)

router.get("/new", planetsCtrl.new)

// router.get('/:id' , planetsCtrl.show)
router.post("/", planetsCtrl.create)

module.exports = router
