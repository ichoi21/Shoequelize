module.exports = (sequelize, DataTypes) => {
  const Shoe = sequelize.define("Shoe", {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    msrp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    market_value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Shoe;
};
