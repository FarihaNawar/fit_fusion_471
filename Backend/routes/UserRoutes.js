const express = require('express');
const { 
    createUser, 
    loginUser, 
    getUserProfile, 
    updateUser, 
    deleteUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById 
} = require('../controller/UserController');
const { authenticate } = require('../middleware/AuthMiddleware');

const router = express.Router();

// Debugging Log
console.log("✅ UserRoutes.js Loaded");

// Routes
router.post('/create', (req, res, next) => {
    console.log("POST /api/users/create - Request received");
    next();
}, createUser);

router.post('/login', (req, res, next) => {
    console.log("POST /api/users/login - Request received");
    next();
}, loginUser);

router.get('/me', authenticate, (req, res, next) => {
    console.log("GET /api/users/me - Request received");
    next();
}, getUserProfile);

router.put('/update', authenticate, (req, res, next) => {
    console.log("PUT /api/users/update - Request received");
    next();
}, updateUser);

router.delete('/delete', authenticate, (req, res, next) => {
    console.log("DELETE /api/users/delete - Request received");
    next();
}, deleteUser);

router.get('/all', authenticate, (req, res, next) => {
    console.log("GET /api/users/all - Request received");
    next();
}, getAllUsers);

router.get('/:id', authenticate, (req, res, next) => {
    console.log(`GET /api/users/${req.params.id} - Request received`);
    next();
}, getUserById);

router.put('/:id', authenticate, (req, res, next) => {
    console.log(`PUT /api/users/${req.params.id} - Request received`);
    next();
}, updateUserById);

router.delete('/:id', authenticate, (req, res, next) => {
    console.log(`DELETE /api/users/${req.params.id} - Request received`);
    next();
}, deleteUserById);

module.exports = router;
