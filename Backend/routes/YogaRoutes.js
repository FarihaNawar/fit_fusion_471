const express = require('express');
const router = express.Router();
const { authenticate, requireAdmin } = require('../middleware/AuthMiddleware');
const { getAllYogaVideos, createYogaVideo, updateYogaVideo, deleteYogaVideo } = require('../controller/YogaController');

// Public list
router.get('/', getAllYogaVideos);

// Admin operations
router.post('/', authenticate, requireAdmin, createYogaVideo);
router.put('/:id', authenticate, requireAdmin, updateYogaVideo);
router.delete('/:id', authenticate, requireAdmin, deleteYogaVideo);

module.exports = router;


