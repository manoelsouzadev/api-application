'use strict';

const express = require('express');
const notificacaoController = require('../controllers/notificacao-controller');

const router = express.Router();

router.get('/', notificacaoController.get);
router.post('/', notificacaoController.post);
router.post('/push-notifications', notificacaoController.pushNotification);
router.delete('/:id', notificacaoController.delete);
router.get('/novas/', notificacaoController.getNovasNotificacoes);

module.exports = router;