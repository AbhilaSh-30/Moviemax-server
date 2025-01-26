const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
});

pool.query("SELECT NOW()", (err, res) => {
    if (err) console.error("Database Connection Error:", err);
    else console.log("Database Connected:", res.rows);
  });
  
module.exports = pool;