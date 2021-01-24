const express = require('express');
const router = new express.Router();


const profileController = require('../controllers/profiles.js')


router.get('/get',
    [

    ]
, profileController.userID)



module.exports = router;