// Connect to DB
const { Client } = require("pg");
const DB_NAME = "alCODEholics";
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;
const client = new Client(DB_URL);

// database methods
const addToCart = async ({ type, name }) => {
  const { rows } = await client.query(
    `
  INSERT INTO alcohols(type, name)
  VALUES($1, $2)
  RETURNING *
  `,
    [type, name]
  );

  return rows;
};

const removeFromCart = async () => {
  const { rows } = await client.query(`
  SELECT type, name
  FROM alcohols
  `);

  return rows;
};


// export
module.exports = {
  client,
  addToCart,
  removeFromCart,
};
