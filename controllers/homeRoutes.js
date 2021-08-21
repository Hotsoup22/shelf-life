// URL localhost:3001/
// Required modules
const router = require('express').Router();
// Required files
const { User, Product, Category } = require('../models');
const serialize = require('../utils/serialize');

// Home route, render welcome page
router.get('/', async (req, res) => {
    try {

        res.render('homepage', {
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// Render Add Products page
router.get('/addItems', async (req, res) => {
    try {

        res.render('addItems', {
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// Render Pantry page
router.get('/pantry', async (req, res) => {
    try {

        const userPantryData = await User.findByPk(req.session.user_id, {
            include: [{model: Product,
                include: [{model: Category}]}
            ],
            attributes: { 
                exclude: ["password"] 
            }
        });

        const userPantry = userPantryData.get({ plain: true });

        res.render('pantry', {
            userPantry,
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export
module.exports = router;