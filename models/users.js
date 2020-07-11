module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    first_name: {
      type: DataTypes.STRING,
      notNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      notNull: false,
    },
    username: {
      type: DataTypes.STRING,
      notNull: false,
    },
    password: {
      type: DataTypes.STRING,
      notNull: false,
    },
  });

  return Users;
};
