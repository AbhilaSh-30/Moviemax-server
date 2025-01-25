const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "mms",
    host: "localhost",
    port: 5432,
    database: "mms"
});

module.exports = pool;