const pool = require("../db/pool");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get All Lives
exports.getAllLives = catchAsyncErrors(async (req, res, next) => {
  const lives = await pool.query("SELECT * FROM lives");

  res.status(200).json({
    success: true,
    lives: lives.rows,
  });
});

// Get All Conditions
exports.conditions = catchAsyncErrors(async (req, res, next) => {
  const conditions = await pool.query(
    "SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat"
  );

  res.status(200).json({
    success: true,
    conditions: conditions.rows,
  });
});
