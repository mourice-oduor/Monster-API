const express = require("express");
const app = express();
const dotenv = require("dotenv");
const errorHandler = require("./utils/errorHandler");
const bodyParser = require('body-parser');
const cors = require("cors");

const monster = require('./routes/monsters');
const habitats = require('./routes/habitats');
const lives = require('./routes/lives');


dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// API ROUTES
app.use('/api/v1', monster);
app.use('/api/v1', habitats);
app.use('/api/v1', lives);

// Error Handling middlewares
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Monsters server running on port ${PORT}`);
});