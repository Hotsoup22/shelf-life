const sequelize = require('../config/connection');
const { User, Product , Category } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');
const categoryData = require('./categoryData.json')
//----------------------------------------------
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const product = await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  const category = await Category.bulkCreate(categoryData,{
    individualHooks:true, 
    returning:true,
  });

  // for (const product of productData) {
  //   await Product.create({
  //     ...product,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();