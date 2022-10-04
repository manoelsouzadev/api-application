'use strict';

const express = require('express');
const anotacaoController = require('../controllers/anotacao-controller');

const router = express.Router();

router.post('/', anotacaoController.post);
router.get('/', anotacaoController.get);
router.get('/:id', anotacaoController.getById);
router.put('/:id', anotacaoController.put);
router.delete('/:id', anotacaoController.delete);

module.exports = router;