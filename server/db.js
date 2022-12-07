const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "5QUff4psWi8YyZbgxzEf",
  host: "containers-us-west-148.railway.app",
  port: "5800",
  database: "railway",
});

module.exports = pool;
