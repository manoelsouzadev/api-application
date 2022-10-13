'use strict';

const express = require('express');
const dashboardController = require('../controllers/dashboard-controller');

const router = express.Router();

router.get('/gerais/counts', dashboardController.getCounts);

router.get('/usuarios/count', dashboardController.getCountUsuarios);

module.exports = router;
