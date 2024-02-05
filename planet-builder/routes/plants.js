const express = require("express");
const router = express.Router();
const vegCtrl = require("../controllers/plants");

router.post("/planet/:id/new", vegCtrl.new);

module.exports = router;