// URL localhost:3001/
// Required modules
const router = require('express').Router();
// Required files
const { User, Product, Category } = require('../models');
// const serialize = require('../utils/serialize');

// Home route, render welcome page
router.get('/', async (req, res) => {
    try {

        res.render('homepage');
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export
module.exports = router;