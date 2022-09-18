const pool = require("../db/pool");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get All Monsters
exports.getAllMonsters = catchAsyncErrors(async (req, res, next) => {
  const monsters = await pool.query("SELECT * FROM monsters");

  res.status(200).json({
    success: true,
    monsters: monsters.rows,
  });
});

// Get Single Monster
exports.getSingleMonster = catchAsyncErrors(async (req, res, next) => {
  const monster = await pool.query("SELECT * FROM monsters WHERE id = $1", [
    req.params.id,
  ]);

  if (!monster) {
    return next(
      new ErrorHandler(`Monster not found with id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    monster: monster.rows[0],
  });
});

// Create New Monster
exports.createMonster = catchAsyncErrors(async (req, res, next) => {
  const { name, personality } = req.body;

  const newMonster = await pool.query(
    "INSERT INTO monsters (name, personality) VALUES ($1, $2) RETURNING *",
    [name, personality]
  );

  res.status(201).json({
    success: true,
    monster: newMonster.rows[0],
  });
});

// Update Monster
exports.updateMonster = catchAsyncErrors(async (req, res, next) => {
  const { name, personality } = req.body;

  // const keys = ["name", "personality"];
  // const fields = [];

  // keys.forEach((key) => {
  //   if (req.body[key]) fields.push(key);
  // });

  // const updateMonster = await pool.query(
  //   `UPDATE monsters SET ${fields.map(
  //     (field, index) => `${field} = $${index + 1}`
  //   )} WHERE id = ${req.params.id} RETURNING *`,
  //   fields.map((field) => req.body[field])
  // );

  

  const monster = await pool.query(
    "UPDATE monsters SET name = $1, personality = $2 WHERE id = $3 RETURNING *",
    [name, personality, req.params.id]
  );

  if (!monster) {
    return next(
      new ErrorHandler(`Monster not found with id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    monster: monster.rows[0],
  });
});

// Delete Monster
exports.deleteMonster = catchAsyncErrors(async (req, res, next) => {
  const monster = await pool.query("DELETE FROM monsters WHERE id = $1", [
    req.params.id,
  ]);

  if (!monster) {
    return next(
      new ErrorHandler(`Monster not found with id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: "Monster is deleted.",
  });
});
