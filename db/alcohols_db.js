const client = require('./client')

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

const getAllAlcohol = async () => {
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
  getAllAlcohol,
};
