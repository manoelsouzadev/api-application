'use strict';

const express = require('express');
const aniversarioController = require('../controllers/aniversario-controller');

const router = express.Router();

router.post('/', aniversarioController.post);
router.get('/', aniversarioController.get);
router.get('/:id', aniversarioController.getById);
router.put('/:id', aniversarioController.put);
router.delete('/:id', aniversarioController.delete);

module.exports = router;