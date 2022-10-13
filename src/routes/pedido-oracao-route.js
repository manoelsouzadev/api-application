'use strict';

const express = require('express');
const pedidoOracaoController = require('../controllers/pedido-oracao-controller');

const router = express.Router();

router.post('/', pedidoOracaoController.post);
router.get('/', pedidoOracaoController.get);
router.get('/:id', pedidoOracaoController.getById);
router.put('/:id', pedidoOracaoController.put);
router.delete('/:id', pedidoOracaoController.delete);
router.get('/registros/count', pedidoOracaoController.getCount);

module.exports = router;
