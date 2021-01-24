const db = require("../models");



const getProfileByuserID = async (data) => {
    const profile = await db.Profiles.findOne({where:{userID: data}});

    return profile;
}



module.exports = {
    getProfileByuserID
}