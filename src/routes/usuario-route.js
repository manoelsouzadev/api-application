'use strict';

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario-controller');
const authService = require('../services/auth-service');

router.post('/', usuarioController.post);
router.post('/autenticar', usuarioController.authenticate);
router.post('/refresh-token', usuarioController.refreshToken);
router.post('/verify-token', usuarioController.verifyToken);
router.get('/:id', usuarioController.getById);
router.get('/', usuarioController.get);
router.put('/:id', usuarioController.put);
router.delete('/:id', usuarioController.delete);

module.exports = router;