const express = require('express');
const router = express.Router();
const serviceRoutes = require('./services');

router.use('/services', serviceRoutes);

module.exports = router;
