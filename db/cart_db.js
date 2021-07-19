const client = require('./client')

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
  addToCart,
  removeFromCart,
};
