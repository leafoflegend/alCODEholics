// Connect to DB
const { Client } = require("pg");
const DB_NAME = "alCODEholics";
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;
const client = new Client(DB_URL);

//USER DATABASE METHODS
const createUser = async ({ username, password, isAdmin }) => {
  try {
      const { rows } = await client.query(
          `
        INSERT INTO users(username, password, "isAdmin")
        VALUES($1, $2, $3)
        RETURNING *
        `,
          [username, password, isAdmin]
        );
      
        return rows;
  } catch (error) {
      throw error
  }

};

const getUser = async () => {
  try {
      const { rows } = await client.query(`
SELECT username, password, "isAdmin"
FROM users
`);

return rows;
  } catch (error) {
      throw error
  }

};

//ALCOHOL DATABASE METHODS
const createAlcohol = async ({ type, name, inStock }) => {
  try {
    const { rows } = await client.query(
      `
          INSERT INTO alcohols(type, name, "inStock")
          VALUES($1, $2, $3)
          RETURNING *
          `,
      [type, name, inStock]
    );

    return rows;
  } catch (error) {
    throw error;
  }
};

//CART DATABASE METHODS

// export
module.exports = {
  client,
  createAlcohol,
  // getAlcohol,
  createUser, 
  // getUser,
  // addToCart,
  // removeFromCart
  // db methods
};
