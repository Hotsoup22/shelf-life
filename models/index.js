const User = require('./User');
const Product = require('./Product');
const Category = require('./Category')

 User.hadMany(Product, {
     foreignKey: 'Product_id',
     onDelete:'SET NULL' 
 }) 

 Product.belongs
module.exports = { User, Product, Category}
// module.exports = { User };
// module.exports = { Product };
// module.exports = { Category }