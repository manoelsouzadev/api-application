'use strict';

const express = require('express');
const publicacaoController = require('../controllers/publicacao-controller');

const router = express.Router();

router.post('/', publicacaoController.post);
router.get('/', publicacaoController.get);
router.get('/categoria/:id/publicacoes', publicacaoController.getListById);
router.get('/:id', publicacaoController.getById);
router.put('/:id', publicacaoController.put);
router.delete('/:id', publicacaoController.delete);
router.get('/registros/count', publicacaoController.getCount);

module.exports = router;

