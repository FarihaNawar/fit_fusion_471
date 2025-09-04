const mongoose = require('mongoose');

const YogaVideoSchema = new mongoose.Schema({
  youtubeUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['Yoga', 'Meditation'], default: 'Yoga' }
}, { timestamps: true });

module.exports = mongoose.model('YogaVideo', YogaVideoSchema);


