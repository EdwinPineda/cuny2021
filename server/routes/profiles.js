const express = require('express');
const router = new express.Router();


const profileController = require('../controller/profile.js')


router.get('/userID',
    [

    ]
, profileController.userID)



module.exports = router;