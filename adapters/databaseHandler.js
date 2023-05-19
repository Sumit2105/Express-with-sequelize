const Sequelize = require('sequelize');
const association = require('./association');
const _ = require('lodash');

const userModel = require('../src/users/models/usersModels');

const databaseHandler = {};

databaseHandler.add = sequelize =>{
    let db = {};
    if (_.has(sequelize, 'db')) {
        db = {
        ...sequelize.db,
        };
    } else {
        sequelize.db = db;
    }

    db.usersModels = userModel.define(sequelize, Sequelize);

    sequelize.db = db;
    association.add({
        db: sequelize.db,
    });

    sequelize.db = {
        Sequelize,
        ...db
    }
}

module.exports = databaseHandler;