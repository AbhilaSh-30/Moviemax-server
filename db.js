const Pool = require("pg").Pool;

const pool = new Pool({
    user: "mms",
    password: "mms",
    host: "localhost",
    port: 5434,
    database: "mms"
});

module.exports = pool;