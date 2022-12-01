'use strict';

const express = require('express');
const router = express.Router();
const utilController = require('../controllers/util-controller');

const multer = require("multer");

const multerConfig = multer();

router.post('/processar/csv', multerConfig.single("file"), utilController.procesarCsv);

module.exports = router;