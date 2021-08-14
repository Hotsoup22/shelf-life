const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
 
class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  datePurchased: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  experationDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
});

module.exports = Product;
