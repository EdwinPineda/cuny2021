const ProfileServices = require("../services/profile.js")



const userID = async (req,res,next) => {
    const { userID } = req.query;

    try {
        const event = await EventServices.getProfileByuserID(userID);
        return res.json(profile)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    userID
}
