const express = require('express');
const productController = require('../controller/ProductController');
const { authenticate, requireAdmin } = require('../middleware/AuthMiddleware');

const router = express.Router();

// Create a product (admin only)
router.post('/', authenticate, requireAdmin, productController.createProduct);
// router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);
// router.get('/', productController.getAllProducts);

// Get a single product by ID
// router.get('/:id', productController.getProductById);
router.get('/:id', productController.getProductById);

router.post('/selected', productController.getProductsByIds);


// Update a product (admin only)
router.put('/:id', authenticate, requireAdmin, productController.updateProduct);
// router.put('/:id', productController.updateProduct);

// Delete a product (admin only)
router.delete('/:id', authenticate, requireAdmin, productController.deleteProduct);
// router.delete('/:id', productController.deleteProduct);

module.exports = router;
