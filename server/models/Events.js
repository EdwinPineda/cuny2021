'use strict';

var Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define('Events', {

        eventID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        owner : {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'userID'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            freezeTableName: true,
        });

    return Events;
}; 