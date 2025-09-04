// controllers/recipeController.js
const Recipe = require('../models/RecipeModel');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes', error });
    }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
    const { imgSrc, title, description } = req.body;
    if (!imgSrc || !title || !description) {
        return res.status(400).json({ message: 'imgSrc, title and description are required' });
    }
    console.log('Creating recipe', { imgSrc, title });

    const newRecipe = new Recipe({
        imgSrc,
        title,
        description
    });

    try {
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        console.error('Error saving recipe', error);
        const status = error?.name === 'ValidationError' ? 400 : 500;
        res.status(status).json({ message: 'Error saving recipe', details: error?.message || 'Unknown error' });
    }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
        const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Recipe not found' });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Error updating recipe', error });
    }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const deleted = await Recipe.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Recipe not found' });
        res.json({ message: 'Recipe deleted', recipe: deleted });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting recipe', error });
    }
};
