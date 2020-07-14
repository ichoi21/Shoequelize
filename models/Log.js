module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define("Log", {
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roast: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Log.associate = (models) => {
    Log.belongsTo(models.User, {
      foreignKey: { allowNull: false },
    });
  };

  return Log;
};
