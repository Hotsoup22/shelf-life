//  const express = require('express');
 const router = require("express").Router();
 const withAuth = require('../../utils/auth')
 const {Product} = require('../../models')

 
 

 //get Product data
 router.post('/', withAuth, async (req, res,) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Delete blogpost
router.delete('/:id', withAuth, async (req, res) => {
  try {
      const ProductData = await Product.destroy({
          where: {
              id: req.params.id
          }
      });

      res.status(200).json(ProductData);

  } catch (err) {
      res.status(400).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const findAllProduct = await findAllProduct.findAll({
      include:  [{ model: Category }],
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

module.exports = router;
      
     
  
 