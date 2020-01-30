'use strict';

const express = require('express');
const oracaoController = require('../controllers/oracao-controller');

const router = express.Router();

router.post('/', oracaoController.post);
router.get('/', oracaoController.get);
router.get('/:id', oracaoController.getById);
router.put('/:id', oracaoController.put);
router.delete('/:id', oracaoController.delete);

module.exports = router;

