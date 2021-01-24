const db = require("../models");

const createEvent = async (data) => {

    const event = await db.Events.create( {
        name: data.name,
        location: data.location,
        desc: data.desc,
        date: data.date,
        time: data.time
    })

    return event;
}

module.exports = {
    createEvent
}