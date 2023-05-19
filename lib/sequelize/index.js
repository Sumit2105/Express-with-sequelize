const Actions = require('./Actions');
const connection = require('./connection');

const sequelize = { Actions, connection };

module.exports = sequelize;