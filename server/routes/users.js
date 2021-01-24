const express = require('express');
const router = new express.Router();

const userController = require('../controllers/users.js')


router.post('/register',
    [

    ]
, userController.register)

router.post('/login',
    [

    ]
, userController.login)

module.exports = router;