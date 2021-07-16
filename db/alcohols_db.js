const { client } = require("./index");

// database methods
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

const getAlcohol = async () => {
  try {
    const { rows } = await client.query(`
  SELECT type, name, "inStock"
  FROM alcohols
  `);

    return rows;
  } catch (error) {
    throw error;
  }
};

// export
module.exports = {
  createAlcohol,
  getAlcohol,
};
