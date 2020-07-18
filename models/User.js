const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    shoeSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Shoe, {
      onDelete: "cascade",
    });

    User.hasOne(models.Profile, {
      onDelete: "cascade",
    });
  };

  // used to check password when logging in
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Creates "salted" password from user submitted password before user
  // is created
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      (err, salty) => {
        if (err) throw err;
      }
    );
  });

  return User;
};
