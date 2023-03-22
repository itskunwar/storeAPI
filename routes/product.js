const express = require("express");
const { getFilteredData } = require("../controllers/product");
const router = express.Router();

router.get("/", getFilteredData);

module.exports = router;
