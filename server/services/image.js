const db = require("../models");

const getImage = async (userID) => {
    const images = await db.Image.findOne({
        where: {
            uploadedBy: userID
        }
    });

    return images
}


module.exports = {
    getImage
} 