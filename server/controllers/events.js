const EventServices = require("../services/events.js")

const register = async (req,res,next) => {
    const { name, location, desc, date, time } = req.body;

    const data = {
        name, 
        location, 
        desc, 
        date, 
        time
    }

    try {
        const event = EventServices.createEvent(data);
        return res.json(event)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    register
}