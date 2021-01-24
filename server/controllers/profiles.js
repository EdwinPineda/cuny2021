const ProfileServices = require("../services/profiles.js")

const userID = async (req,res,next) => {
    const { id } = req.query;

    try {
        const profile = await ProfileServices.getProfileByuserID(id);
        return res.json(profile)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    userID
}
