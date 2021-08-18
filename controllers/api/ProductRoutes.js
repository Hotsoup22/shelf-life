 const express = require('express');
 const router = require("express").Router();
 
 

 //get Product data
 router.post('/', withAuth, async (req, res,) => {
    res.status(200).json({
        message: 'Get request to products'
    })
      });
 router.post('/', withAuth, async (req, res,) => {
    res.status(200).json({
        message: 'Post request to products'
    })
      });
router.delete('/product', withAuth, async (req, res) => {
    
})
  

module.exports = router;
      
     
  
 