const express = require("express");
const {
  getAllMonsters,
  getSingleMonster,
  createMonster,
  updateMonster,
  deleteMonster,
} = require("../controllers/monsterController");

const router = express.Router();

router.route("/monsters").get(getAllMonsters);

router.route("/monsters/:id").get(getSingleMonster);

router.route("/monsters").post(createMonster);

router.route("/monsters/:id").put(updateMonster);

router.route("/monsters/:id").delete(deleteMonster);

module.exports = router;
