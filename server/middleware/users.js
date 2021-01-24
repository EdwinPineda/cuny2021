const userServices = require('../services/users.js');

const attachDecodedToken = async (value, {req}) => {
    const splitted = value.split(' ');
    if (splitted.length !== 2) {
      throw new Error('Malformed authorization header');
    }
    if (splitted[0].toLowerCase() !== 'bearer') {
      throw new Error('Incorrect authorization type (Must be Bearer)');
    }

    const decoded = await userServices.verifyJwtToken(splitted[1]);
    req.jwtDecoded = decoded;
    return true;
}

const emailShouldExist = (shouldExist) => async(value, {req}) => {
    const user = await userServices.getUserByEmail(value);
    if (shouldExist && !user) {
        throw new Error("Email not found")
    }
    if (!shouldExist && user) {
        throw new Error("Email already exist")
    }
    if (user) {
        req.user = user
    }
    return true 
}



const passwordMatches = async (value, {req}) => {
    if (value === req.user.password) {
        return true; 
    }
    return false;  
}

const confirmPassword = async(value, {req}) => {
    if (value !== req.body.password2) {
        throw new Error('Password confirmation does not match password') 
    }
    return true
}

module.exports = {
    attachDecodedToken,
    emailShouldExist,
    passwordMatches,
    confirmPassword
}  