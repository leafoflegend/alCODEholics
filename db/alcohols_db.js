const client = require('./client')

const createAlcohol = async ({ type, name, price, description, inStock }) => {
  try {
    const { rows } = await client.query(
      `
          INSERT INTO alcohols(type, name, price, description, "inStock")
          VALUES($1, $2, $3, $4, $5)
          RETURNING *
          `,
      [type, name, price, description, inStock]
    );

    return rows;
  } catch (error) {
    throw error;
  }
};

const getAllAlcohol = async () => {
  try {
    const { rows } = await client.query(`
  SELECT type, name, price, description, "inStock"
  FROM alcohols
  `);

    return rows;
  } catch (error) {
    throw error;
  }
};


//getAlcoholById
const getAlcoholById = async (id) => {
  try {
    const {rows: [alcohol]} = await client.query(`
      SELECT *
      FROM alcohols
      WHERE id=$1
    `, [id])

    return alcohol
  } catch (error) {
    throw error
  }
}

//getAlcoholbyUserId



// export
module.exports = {
  createAlcohol,
  getAllAlcohol,
  getAlcoholById
};
