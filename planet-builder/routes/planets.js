const express = require("express")
const router = express.Router()
// You'll be creating this controller module next
const planetsCtrl = require("../controllers/planets")

// GET /movies
router.get("/", planetsCtrl.index)
// GET /movies/new
router.get("/new", planetsCtrl.new)
// GET /movies/:id (show functionality) MUST be below new route
router.get("/:id", planetsCtrl.show)
// POST /movies
router.post("/", planetsCtrl.create)

module.exports = router
