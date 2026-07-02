// ==================== USER CONTROLLER ====================
// Gère la logique métier et les validations
const User = require('../models/User');

const userController = {
  // GET ALL USERS
  getAllUsers: (req, res) => {
    try {
      const users = User.getAll();
      res.status(200).json({
        status: 'success',
        message: 'Users retrieved successfully',
        data: users,
        count: users.length
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error retrieving users',
        error: error.message
      });
    }
  },

  // GET USER BY ID
  getUserById: (req, res) => {
    try {
      const { id } = req.params;
      const user = User.getById(id);

      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: `User with ID ${id} not found`
        });
      }

      res.status(200).json({
        status: 'success',
        message: 'User retrieved successfully',
        data: user
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error retrieving user',
        error: error.message
      });
    }
  },

  // CREATE USER
  createUser: (req, res) => {
    try {
      const { name, email, role } = req.body;

      // VALIDATION
      if (!name || !email || !role) {
        return res.status(400).json({
          status: 'error',
          message: 'Missing required fields: name, email, role'
        });
      }

      // Vérifier si email existe déjà
      const existingUser = User.getAll().find(u => u.email === email);
      if (existingUser) {
        return res.status(400).json({
          status: 'error',
          message: 'Email already exists'
        });
      }

      const newUser = User.create({ name, email, role });

      res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        data: newUser
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error creating user',
        error: error.message
      });
    }
  },

  // UPDATE USER
  updateUser: (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, role } = req.body;

      const user = User.getById(id);
      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: `User with ID ${id} not found`
        });
      }

      const updatedUser = User.update(id, { name, email, role });

      res.status(200).json({
        status: 'success',
        message: 'User updated successfully',
        data: updatedUser
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error updating user',
        error: error.message
      });
    }
  },

  // DELETE USER
  deleteUser: (req, res) => {
    try {
      const { id } = req.params;

      const user = User.getById(id);
      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: `User with ID ${id} not found`
        });
      }

      User.delete(id);

      res.status(200).json({
        status: 'success',
        message: 'User deleted successfully',
        data: user
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error deleting user',
        error: error.message
      });
    }
  }
};

module.exports = userController;