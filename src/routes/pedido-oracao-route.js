'use strict';

const express = require('express');
const pedidoOracaoController = require('../controllers/pedido-oracao-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.post('/', authService.authorize, pedidoOracaoController.post);
router.get('/', authService.authorize, pedidoOracaoController.get);
router.get('/:id', authService.authorize, pedidoOracaoController.getById);
router.put('/:id', authService.authorize, pedidoOracaoController.put);
router.delete('/:id', authService.authorize, pedidoOracaoController.delete);
router.get('/registros/count', authService.authorize, pedidoOracaoController.getCount);

module.exports = router;
