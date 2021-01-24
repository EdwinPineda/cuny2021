const express = require('express');
const router = new express.Router();

const eventController = require('../controllers/events.js')


router.post('/register',
    [

    ]
, eventController.register)

module.exports = router;