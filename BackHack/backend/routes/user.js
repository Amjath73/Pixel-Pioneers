const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Middleware for Authentication
const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Not authorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Fetch User Stats
router.get('/:id', protect, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ points: user.points, cupsSaved: user.cupsSaved });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user stats', error });
  }
});

// Leaderboard
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaderboard', error });
  }
});

module.exports = router;
