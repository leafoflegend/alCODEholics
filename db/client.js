const { Client } = require("pg");
// const DB_NAME = "alCODEholics";
const client = new Client(process.env.DATABASE_URL || `postgres://localhost:5432/alCODEholics`);
// const client = new Client(DB_URL);

module.exports = client