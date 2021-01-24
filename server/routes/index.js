const express = require('express');
const router = new express.Router();

router.use('*', (req, res, next) => {
    res.status(404).json({ errors: [{ msg: 'Unknown API route' }] });
});


module.exports = router;