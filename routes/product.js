const express = require("express");
const { helloMonday, helloSunday } = require("../controllers/product");
const router = express.Router();

router.get("/sunday", helloSunday);
router.get("/monday", helloMonday);

module.exports = router;
