'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    messageId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Post',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'User',
        key: 'id'
      }
    }
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    models.User.belongsToMany(models.Post, {
      through: models.Like,
      foreignKey: 'userId',
      otherKey: 'PostId',
    });

    models.Post.belongsToMany(models.User, {
      through: models.Like,
      foreignKey: 'PostId',
      otherKey: 'userId',
    });

    models.Like.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    models.Like.belongsTo(models.Post, {
      foreignKey: 'PostId',
      as: 'post',
    });
  };
  return Like;
};