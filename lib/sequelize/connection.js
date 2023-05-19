const Sequelize = require('sequelize');

const connection = {};

/* Sequelize.Promise.config({
  longStackTraces: true,
}); */

connection.init = ({ config }) => {
  try {
    return new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
      host: config.DB_HOST,
      port: config.DB_PORT,
      dialect: config.DB_DIALECT,
      timezone: config.DB_TIMEZONE,
      logging: false,
      longStackTraces: true,
      pool: {
        max: parseInt(config.DB_CONNECTION_LIMIT) || 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      define: {
        charset: 'utf8',
        dialectOptions: {
          collate: 'utf8_general_ci',
        },
        timestamps: false,
      },
    });
  } catch (err) {
    return err;
  }
};

module.exports = connection;
