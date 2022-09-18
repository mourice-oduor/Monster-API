const express = require("express");
const {
  getAllLives,
  conditions
} = require("../controllers/livesController");

const router = express.Router();

router.route("/lives").get(getAllLives);

router.route("/lives/conditions").get(conditions);

module.exports = router;
