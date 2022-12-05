'use strict';

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario-controller');
const authService = require('../services/auth-service');

router.post('/', authService.authorize, usuarioController.post);
router.post('/autenticar', usuarioController.authenticate);
router.post('/refresh-token', authService.authorize, usuarioController.refreshToken);
router.post('/verify-token', authService.authorize, usuarioController.verifyToken);
router.get('/:id', usuarioController.getById);
router.get('/', authService.authorize, usuarioController.get);
router.put('/:id', authService.authorize, usuarioController.put);
router.delete('/:id', authService.authorize, usuarioController.delete);
router.get('/registros/count', authService.authorize, usuarioController.getCount);
router.get('/registros/membros', authService.authorize, usuarioController.getByMembro);
router.get('/registros/niveis-acesso/membros/count', authService.authorize, usuarioController.getByNivelAcesso);

module.exports = router;