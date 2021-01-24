const db = require("../models");

const createEvent = async (data) => {

    const event = await db.Events.create( {
        name: data.name,
        owner: data.owner,
        location: data.location,
        desc: data.desc,
        date: data.date,
        time: data.time
    })

    return event;
}

const getEventByLocation = async (data) => {
    const event = await db.Events.findAll({ where: { location: data } });

    return event;
}

const getEventByOwner = async (data) => {
    const event = await db.Events.findAll({ where: { owner: data } });
    
    return event;
}

const getEventByDate = async (data) => {
    const event = await db.Events.findAll({ where: { date: data } });
    
    return event;
}

module.exports = {
    createEvent,
    getEventByLocation,
    getEventByOwner,
    getEventByDate
}