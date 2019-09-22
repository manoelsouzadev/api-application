'use strict';

const express = require('express');
const cultoController = require('../controllers/culto-controller');

const router = express.Router();

router.post('/', cultoController.post);
router.get('/', cultoController.get);
router.get('/admin/:id', cultoController.getById);
router.put('/:id', cultoController.put);
router.delete('/:id', cultoController.delete);

module.exports = router;

