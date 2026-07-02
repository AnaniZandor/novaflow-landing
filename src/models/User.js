// ==================== USER MODEL ====================
// Simulation d'une base de données en mémoire
// En production: MongoDB, PostgreSQL, etc.

// Mock data - Données simulées
let users = [
  {
    id: 1,
    name: 'Anani Zandor',
    email: 'ananizandor@gmail.com',
    role: 'admin',
    createdAt: new Date('2026-01-15')
  },
  {
    id: 2,
    name: 'Marie Dupont',
    email: 'marie@example.com',
    role: 'user',
    createdAt: new Date('2026-02-20')
  }
];

let nextId = 3; // Compteur pour IDs

// ==================== OPERATIONS ====================
const User = {
  // GET ALL
  getAll: () => users,

  // GET BY ID
  getById: (id) => users.find(u => u.id === parseInt(id)),

  // CREATE
  create: (userData) => {
    const newUser = {
      id: nextId++,
      ...userData,
      createdAt: new Date()
    };
    users.push(newUser);
    return newUser;
  },

  // UPDATE
  update: (id, userData) => {
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return null;
    Object.assign(user, userData);
    return user;
  },

  // DELETE
  delete: (id) => {
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index === -1) return null;
    return users.splice(index, 1)[0];
  }
};

module.exports = User;