const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
 
class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_purchased: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  experation_date: {
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
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "category",
      key: "id",
    },
  }
});

module.exports = Product;
