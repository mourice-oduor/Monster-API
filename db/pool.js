const { Pool } = require("pg");
// const dotenv = require("dotenv");
// dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = pool;

// const connectDb = async () => {
//   try {
//     const pool = new Pool({
//       user: process.env.PGUSER,
//       host: process.env.PGHOST,
//       database: process.env.PGDATABASE,
//       password: process.env.PGPASSWORD,
//       port: process.env.PGPORT,
//     });

//     await pool.connect();
//     // const res = await pool.query("SELECT * FROM monsters");
//     // console.log(res);
//     await pool.end();
//   } catch (error) {
//     console.log(error);
//   }
// };

// connectDb();

// module.exports = connectDb;
