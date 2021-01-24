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


const getUserByEmail = async (data) => {
    const user = await db.Users.findOne({ where: { email: data } });

    return user;
}

const createUser = async (data) => {
    const user = await db.Users.create( {
        first_name : data.first_name,
        last_name: data.last_name,
        email : data.email, 
        password : data.password
    })

    const id = await getUserByEmail(data.email);

    await db.Profiles.create({
        userID: id.dataValues.userID
    })


    return user;
}

module.exports = {
    getJwtToken,
    verifyJwtToken,
    createUser,
    getUserByEmail
}