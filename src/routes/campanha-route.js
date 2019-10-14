'use strict';

const express = require('express');
const campanhaController = require('../controllers/campanha-controller');

const router = express.Router();

router.post('/', campanhaController.post);
router.get('/', campanhaController.get);
router.get('/:id', campanhaController.getById);
router.put('/:id', campanhaController.put);
router.delete('/:id', campanhaController.delete);

module.exports = router;