const EventServices = require("../services/events.js")

const register = async (req,res,next) => {
    const { name, location, desc, date, time, owner } = req.body;

    const data = {
        name, 
        location, 
        desc, 
        date, 
        time,
        owner
    }

    try {
        const event = await EventServices.createEvent(data);
        console.log(event);
        return res.json(event)
    }
    catch (error) {
        next(error)
    }
}

const location = async (req,res,next) => {
    console.log(req)
    const { location } = req.query;
    console.log(location)

    try {
        const event = await EventServices.getEventByLocation(location);
        return res.json(event)
    }
    catch (error) {
        next(error)
    }
}

const date = async (req,res,next) => {
    const { date } = req.query;

    try {
        const event = await EventServices.getEventByDate(date);
        return res.json(event)
    }
    catch (error) {
        next(error)
    }
}

const owner = async (req,res,next) => {
    const { owner } = req.query;

    try {
        const event = await EventServices.getEventByOwner(owner);
        return res.json(event)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    location,
    date,
    owner
}