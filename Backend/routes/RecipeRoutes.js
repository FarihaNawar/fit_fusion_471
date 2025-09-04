// routes/recipeRoutes.js
const express = require("express");
const router = express.Router();
const { authenticate, requireAdmin } = require('../middleware/AuthMiddleware');
const { createRecipe, getAllRecipes, updateRecipe, deleteRecipe } = require("../controller/RecipeController");

// Apply authentication middleware to all routes
// router.use(authenticate);

// Create a new recipe (admin only)
router.post("/", (req, res, next) => { console.log('POST /api/recipes', req.body); next(); }, authenticate, requireAdmin, createRecipe);
// router.post("/", createRecipe);


// Get all recipes (public)
router.get("/", getAllRecipes);

// Update a recipe (admin only)
router.put('/:id', (req, res, next) => { console.log('PUT /api/recipes/:id', req.params.id, req.body); next(); }, authenticate, requireAdmin, updateRecipe);

// Delete a recipe (admin only)
router.delete('/:id', (req, res, next) => { console.log('DELETE /api/recipes/:id', req.params.id); next(); }, authenticate, requireAdmin, deleteRecipe);
// router.get("/", getAllRecipes);

module.exports = router;
