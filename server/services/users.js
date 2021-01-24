const db = require("../models");
const jwt = require('jsonwebtoken');
const JWT_OPTIONS = {
    expiresIn: 31556926,
};

const secretOrPrivateKey = 'secret';

const getJwtToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, JWT_OPTIONS, (err, token) => {
            return err ? reject(err) : resolve(token);
        });
    });
};

const verifyJwtToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretOrPrivateKey, (err, decoded) => {
            return err ? reject(err) : resolve(decoded);
        });
    });
};

/**
 * 
 * @param {Object} data - User data
 * @returns {Promise<Model>} User model instance  
 */
const createUser = async (data) => {
    const user = await db.User.create( {
        name : data.name,
        email : data.email, 
        password : data.password
    })
    return user;
}

module.exports = {
    getJwtToken,
    verifyJwtToken,
    createUser
}