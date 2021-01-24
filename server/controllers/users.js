const UserServices = require("../services/users.js")

const login = (req,res, next) => {
    const payload = {
        id : req.user.userID,
        name : req.user.name,
        email : req.user.email
    }
    return UserServices.getJwtToken(payload)
    .then((token) => {
        res.json({
            success : true ,
            token: 'Bearer ' + token 
        })
    })
    .catch(error => next(error))
}

const register = async (req,res,next) => {
    const { name , email , password } = req.body
    const hashedpassword = await UserServices.generateHash(password)
    user = {
        name,
        email,
        password: hashedpassword
    }
    try {
        const newUser = await UserServices.createUser(user)
        console.log(`controllers and this is the created user ${newUser}`)
        return res.json(newUser)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {

}