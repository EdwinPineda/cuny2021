const ProfileServices = require("../services/profiles.js")
const UserServices = require("../services/users.js")

const userID = async (req,res,next) => {
    const { id } = req.query;

    try {
        const profile = await ProfileServices.getProfileByuserID(id);
        const user = await UserServices.getUserByID(profile.userID)
        const data = {user: user, profile: profile}
        return res.json(data)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    userID
}
