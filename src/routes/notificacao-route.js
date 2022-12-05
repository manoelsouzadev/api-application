'use strict';

const express = require('express');
const notificacaoController = require('../controllers/notificacao-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.get('/', authService.authorize, notificacaoController.get);
router.post('/', authService.authorize, notificacaoController.post);
router.post('/push-notifications', authService.authorize, notificacaoController.pushNotification);
router.delete('/:id', authService.authorize, notificacaoController.delete);
router.get('/novas/', authService.authorize, notificacaoController.getNovasNotificacoes);

module.exports = router;