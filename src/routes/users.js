// ==================== USER ROUTES ====================
// Définit les endpoints et les associe aux contrôleurs

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes CRUD pour les utilisateurs

// GET /api/users - Récupère tous les utilisateurs
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Récupère un utilisateur par ID
router.get('/:id', userController.getUserById);

// POST /api/users - Crée un nouvel utilisateur
router.post('/', userController.createUser);

// PUT /api/users/:id - Met à jour un utilisateur
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id - Supprime un utilisateur
router.delete('/:id', userController.deleteUser);

module.exports = router;