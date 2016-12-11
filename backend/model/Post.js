const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const User = require('./User');

const Post = sequelizeConnection.define('post',{
  title: {
    type: Sequelize.STRING
  },  
  body: {
    type: Sequelize.STRING
  }
});

Post.belongsTo(User);

module.exports = Post;