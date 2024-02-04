const express = require("express");
const router = express.Router();
const planetsCtrl = require("../controllers/planets");

router.get("/", planetsCtrl.index);

module.exports = router;