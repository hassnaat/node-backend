const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.route('/').post(serviceController.create).get(serviceController.getAll);

module.exports = router;
