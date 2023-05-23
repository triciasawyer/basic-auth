'use strict';

module.exports = (sequelizeDb, DataTypes) => {
  return sequelizeDb.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
