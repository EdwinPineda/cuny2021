const express = require('express');
const router = new express.Router();

const userRoutes = require('./users.js');

router.use('/users',userRoutes);

router.use('*', (req, res, next) => {
    res.status(404).json({ errors: [{ msg: 'Unknown API route' }] });
});

module.exports = router;