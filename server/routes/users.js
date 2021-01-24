const express = require('express');
const router = new express.Router();

const userController = require('../../controllers/users.js')


router.post('/register',
    [

    ]
, userController.register)


/**
 * Login user and return JWT token
 *
 * @memberof module:api/users
 * @name POST /login
 */
router.post('/login',
    [

    ]
, userController.login)

module.exports = router;