const router = require('express').Router();
const { User, Product, Category } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                  model: Product,
                  include:[
                     { model: Category,
                     },
                  ]
                },
              ],
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
          });
        

          res.json(userData)
  
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
