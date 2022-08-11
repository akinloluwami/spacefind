const spaces = require("../controllers/spaces");
const express = require("express");
const router = express.Router();

router.get("/", spaces.getSpaces);
router.get("/:id", spaces.getSingleSpace);

module.exports = router;
