// ==================== USER MODEL WITH DATABASE ====================
const db = require('../database/init');

const User = {
  // GET ALL USERS
  getAll: () => {
    try {
      const users = db.prepare('SELECT * FROM users ORDER BY id DESC').all();
      return users;
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  },

  // GET USER BY ID
  getById: (id) => {
    try {
      const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
      return user || null;
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  },

  // CREATE USER
  create: (userData) => {
    try {
      const stmt = db.prepare(
        'INSERT INTO users (name, email, role) VALUES (?, ?, ?)'
      );
      const result = stmt.run(userData.name, userData.email, userData.role);
      return User.getById(result.lastInsertRowid);
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  },

  // UPDATE USER
  update: (id, userData) => {
    try {
      const stmt = db.prepare(
        'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?'
      );
      stmt.run(userData.name || '', userData.email || '', userData.role || 'user', id);
      return User.getById(id);
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  },

  // DELETE USER
  delete: (id) => {
    try {
      const user = User.getById(id);
      if (!user) return null;
      db.prepare('DELETE FROM users WHERE id = ?').run(id);
      return user;
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  }
};

module.exports = User;