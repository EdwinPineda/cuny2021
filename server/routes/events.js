const express = require('express');
const router = new express.Router();

const eventController = require('../controllers/events.js')


router.post('/register',
    [

    ]
, eventController.register)

router.get('/location',
    [

    ]
, eventController.location)

router.get('/date',
    [

    ]
, eventController.date)

router.get('/owner',
    [

    ]
, eventController.owner)

module.exports = router;