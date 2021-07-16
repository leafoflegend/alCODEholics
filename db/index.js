// Connect to DB
<<<<<<< HEAD
const { Client } = require('pg');
const DB_NAME = 'change-this-name'
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);

// database methods
=======
const { Client } = require("pg");
const DB_NAME = "alCODEholics";
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;
const client = new Client(DB_URL);

// database methods
const createAlcohol = async ({ type, name }) => {
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

const getAlcohol = async () => {
  const { rows } = await client.query(`
  SELECT type, name
  FROM alcohols
  `);

  return rows;
};
>>>>>>> 1cdd146b11e87071783bf02c49178ab59f14fe56

// export
module.exports = {
  client,
<<<<<<< HEAD
  // db methods
}
=======
  createAlcohol,
  getAlcohol,
  // db methods
};
>>>>>>> 1cdd146b11e87071783bf02c49178ab59f14fe56
