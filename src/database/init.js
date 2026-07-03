// ==================== DATABASE INITIALIZATION ====================
const Database = require('better-sqlite3');
const path = require('path');

// Crée/ouvre la BD
const dbPath = path.join(__dirname, '../../data.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// ==================== CREATE USERS TABLE ====================
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'user',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`;

db.exec(createTableSQL);

console.log(`Database initialized at: ${dbPath}`);

module.exports = db;