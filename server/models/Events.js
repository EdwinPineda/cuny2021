'use strict';

var Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define('Events', {

        events_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        events_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        events_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        events_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            freezeTableName: true,
        });

    return Events;
}; 