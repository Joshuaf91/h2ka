const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

const User = sequelizeConnection.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  }
});

module.exports = User;