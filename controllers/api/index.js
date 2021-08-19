// URL localhost:3001/
// Required modules
const router = require('express').Router();
// Required files
const userRoutes = require('./userRoutes');
const {Product} = require('../../models')

// Routing
router.use('/', userRoutes);


// Export
module.exports = router;