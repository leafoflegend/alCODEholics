const client = require('./client')

// Same spacing/new line concerns as alcohols_db.js
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

const checkout = async () => {
  //change the status of cart items to completed
  //subtract cart amount from alcohols inventory column
}



// export
module.exports = {
  addToCart,
  removeFromCart,
};
