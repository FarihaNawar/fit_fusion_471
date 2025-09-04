const YogaVideo = require('../models/YogaModel');

exports.getAllYogaVideos = async (req, res) => {
  try {
    const videos = await YogaVideo.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (e) {
    res.status(500).json({ message: 'Error fetching yoga videos', error: e });
  }
};

exports.createYogaVideo = async (req, res) => {
  const { youtubeUrl, thumbnailUrl, title, description, category } = req.body;
  if (!youtubeUrl || !thumbnailUrl || !title || !description) {
    return res.status(400).json({ message: 'youtubeUrl, thumbnailUrl, title, description required' });
  }
  try {
    const created = await YogaVideo.create({ youtubeUrl, thumbnailUrl, title, description, category });
    res.status(201).json(created);
  } catch (e) {
    res.status(400).json({ message: 'Error creating yoga video', error: e });
  }
};

exports.updateYogaVideo = async (req, res) => {
  try {
    const updated = await YogaVideo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Yoga video not found' });
    res.json(updated);
  } catch (e) {
    res.status(500).json({ message: 'Error updating yoga video', error: e });
  }
};

exports.deleteYogaVideo = async (req, res) => {
  try {
    const deleted = await YogaVideo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Yoga video not found' });
    res.json({ message: 'Yoga video deleted', video: deleted });
  } catch (e) {
    res.status(500).json({ message: 'Error deleting yoga video', error: e });
  }
};


