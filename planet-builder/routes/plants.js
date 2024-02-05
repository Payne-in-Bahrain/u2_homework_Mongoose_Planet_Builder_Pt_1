const express = require("express");
const router = express.Router();
const vegCtrl = require("../controllers/plants");

router.post("/planets/:id/new", vegCtrl.create);

module.exports = router;