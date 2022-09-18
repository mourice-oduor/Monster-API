const pool = require("../db/pool");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get All Habitats
exports.getAllHabitats = catchAsyncErrors(async (req, res, next) => {
  const monsters = await pool.query("SELECT * FROM habitats");

  res.status(200).json({
    success: true,
    monsters: monsters.rows,
  });
});

// Get Single Habitat
exports.getSingleHabitat = catchAsyncErrors(async (req, res, next) => {
    const habitat = await pool.query("SELECT * FROM habitats WHERE id = $1", [
        req.params.id,
    ]);

    if (!habitat) {
        return next(
            new ErrorHandler(`Habitat not found with id: ${req.params.id}`, 404)
        );
    }

    res.status(200).json({
        success: true,
        habitat: habitat.rows[0],
    });
});


// Create New Habitat
exports.createHabitat = catchAsyncErrors(async (req, res, next) => {
    const {name, climate, temperature} = req.body;

    const newHabitat = await pool.query(
        "INSERT INTO habitats (name, climate, temperature) VALUES ($1, $2, $3) RETURNING *",
        [name, climate, temperature]
    );
    
    res.status(201).json({
        success: true,
        habitat: newHabitat.rows[0],
    });
});

// Update Habitat
exports.updateHabitat = catchAsyncErrors(async (req, res, next) => {
    const {name, climate, temperature} = req.body;

    const updateHabitat = await pool.query(
        "UPDATE habitats SET name = $1, climate = $2, temperature = $3 WHERE id = $4 RETURNING *",
        [name, climate, temperature, req.params.id]
    );

    res.status(200).json({
        success: true,
        habitat: updateHabitat.rows[0],
    });
});

// Delete Habitat
exports.deleteHabitat = catchAsyncErrors(async (req, res, next) => {
    const deleteHabitat = await pool.query("DELETE FROM habitats WHERE id = $1", [
        req.params.id,
    ]);

    res.status(200).json({
        success: true,
        message: "Habitat deleted",
    });
});

//   )} WHERE id = $${fields.length + 1} RETURNING *`,
//   [...fields.map((field) => req.body[field]), req.params.id]
// );
//
//   res.status(200).json({
//     success: true,
//     monster: updateMonster.rows[0],
//   });
// });
//