// URL localhost:3001/
// Required modules
const router = require('express').Router();
// Required files
const userRoutes = require('./userRoutes');

// /api/
// Routing
router.use('/users', userRoutes);


// Export
module.exports = router;