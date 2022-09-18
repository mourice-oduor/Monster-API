const express = require("express");
const {
  getAllHabitats,
  getSingleHabitat,
  createHabitat,
  updateHabitat,
  deleteHabitat,
} = require("../controllers/habitatsController");

const router = express.Router();

router.route("/habitats").get(getAllHabitats);

router.route("/habitats/:id").get(getSingleHabitat);

router.route("/habitats").post(createHabitat);

router.route("/habitats/:id").put(updateHabitat);

router.route("/habitats/:id").delete(deleteHabitat);

module.exports = router;
