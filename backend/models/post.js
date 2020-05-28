'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    idUser: DataTypes.INTEGER,
    content: DataTypes.STRING,
    attachement: DataTypes.STRING,
    like: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};