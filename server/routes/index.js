const express = require('express');
const router = new express.Router();

const userRoutes = require('./users.js');
const eventRoutes = require('./events.js');
const profileRoutes = require('./profiles.js');
const imageRoutes = require('./image.js');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/profiles', profileRoutes);
router.use('/images', imageRoutes);

router.use('*', (req, res, next) => {
    res.status(404).json({ errors: [{ msg: 'Unknown API route' }] });
});

module.exports = router;