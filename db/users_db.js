const { client } = require("./index");

// database methods
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
    throw error;
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
    throw error;
  }
};

// export
module.exports = {
  createUser,
  getUser,
};
