'use strict';

const express = require('express');
const notificacaoController = require('../controllers/notificacao-controller');

const router = express.Router();

router.get('/', notificacaoController.get);
router.post('/', notificacaoController.post);
router.delete('/:id', notificacaoController.delete);
router.get('/novas/', notificacaoController.getNovasNotificacoes);

module.exports = router;