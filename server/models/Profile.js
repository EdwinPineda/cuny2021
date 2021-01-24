'use strict';

var Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    const Profiles = sequelize.define('Profiles', {
        profilesID: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        user_age: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_interest: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_bios: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_social_media:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
        {
            freezeTableName: true,
        });

    return Profiles;
}; 