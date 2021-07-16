async function getAllUsers() {
    try {
      const { rows } = await client.query(
        `SELECT id, username, password, "isAdmin" 
        FROM users;
      `);
    
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  async function getUserById(userId) {
    try {
      const { rows: [user] } = await client.query(`
        SELECT id, username, password, "isAdmin"
        FROM users 
        WHERE id=${userId}
      `)
  
      if (!user) {
        return null;
      }
  
      return user;
    } catch (error) {
      throw error;
    }
  }
  
  async function createUser({
    username,
    password,
    isAdmin
  }) {
    try {
      const { rows: [user] } = await client.query(`
        INSERT INTO users(username, password, "isAdmin")
        VALUES($1, $2, $3)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;
      `, [username, password, isAdmin]);
  
      return user;
    } catch (error) {
      throw error;
    }
  }