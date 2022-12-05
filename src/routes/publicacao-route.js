'use strict';

const express = require('express');
const publicacaoController = require('../controllers/publicacao-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.post('/', authService.authorize, publicacaoController.post);
router.get('/', authService.authorize, publicacaoController.get);
router.get('/categoria/:id/publicacoes', authService.authorize, publicacaoController.getListById);
router.get('/:id', authService.authorize, publicacaoController.getById);
router.put('/:id', authService.authorize, publicacaoController.put);
router.delete('/:id', authService.authorize, publicacaoController.delete);
router.get('/registros/count', authService.authorize, publicacaoController.getCount);

module.exports = router;

