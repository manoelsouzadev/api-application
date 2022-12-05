'use strict';

const express = require('express');
const oracaoController = require('../controllers/oracao-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.post('/', authService.authorize, oracaoController.post);
router.get('/', authService.authorize, oracaoController.get);
router.get('/:id', authService.authorize, oracaoController.getById);
router.put('/:id', authService.authorize, oracaoController.put);
router.delete('/:id', authService.authorize, oracaoController.delete);
router.get('/registros/count', authService.authorize, oracaoController.getCount);

module.exports = router;

