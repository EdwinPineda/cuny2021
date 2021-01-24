const express = require('express');
const router = new express.Router();
const {check, param, header} = require('express-validator');

const userController = require('../controllers/users.js');
const userMiddleware = require('../middleware/users.js');
const validatorErrors = require('../middleware/validatorErrors');


router.post('/register',
    [

    ]
, userController.register)

router.post('/login',
    [
        check('email', "Email input field required")
        .isEmail().withMessage('Not a valid Email')
        .bail() 
        .custom(userMiddleware.emailShouldExist(true)),
        check('password',"Password input field required")
        .bail()
        .custom(userMiddleware.passwordMatches),
        validatorErrors
    ]
, userController.login)

module.exports = router;