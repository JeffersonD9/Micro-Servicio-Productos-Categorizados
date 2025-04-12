const express = require('express');
const router = express.Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const daneRoutes = require('./daneRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

router.use('/categories', authMiddleware, categoryRoutes);
router.use('/products', authMiddleware, productRoutes);
router.use('/dane', authMiddleware, daneRoutes);

module.exports = router;