// ==================== SERVER SETUP ====================
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==================== MIDDLEWARE (AVANT LES ROUTES !) ====================
app.use(cors());
app.use(express.json());        // ⚠️ DOIT ÊTRE AVANT LES ROUTES
app.use(express.urlencoded({ extended: true }));

// ==================== LOGGER ====================
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ==================== IMPORT DES ROUTES ====================
const userRoutes = require('./src/routes/users');

// ==================== ROUTES ====================
// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: '🚀 NovaFlow API is running!',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      users: '/api/users',
      userById: '/api/users/:id'
    }
  });
});

// Route racine
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: '🚀 NovaFlow API is running!',
    documentation: {
      health: '/api/health',
      users: '/api/users'
    }
  });
});

// ==================== USER ROUTES ====================
app.use('/api/users', userRoutes);

// ==================== 404 ====================
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint not found',
    path: req.originalUrl,
    method: req.method
  });
});

// ==================== 500 ====================
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ==================== START ====================
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(` Health check: http://localhost:${PORT}/api/health`);
  console.log(` Users API: http://localhost:${PORT}/api/users`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});