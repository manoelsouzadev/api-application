'use strict';

const express = require('express');
const dividaEscolaBiblicaController = require('../controllers/divida-escola-biblica-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.post('/', authService.authorize, dividaEscolaBiblicaController.post);
router.get('/', authService.authorize, dividaEscolaBiblicaController.get);
router.get('/:id', authService.authorize, dividaEscolaBiblicaController.getById);
router.put('/:id', authService.authorize, dividaEscolaBiblicaController.put);
router.delete('/:id', authService.authorize, dividaEscolaBiblicaController.delete);
router.get('/valores/devidos', authService.authorize, dividaEscolaBiblicaController.getValoresDevidosEscolaBiblica);
router.get('/registros/count', authService.authorize, dividaEscolaBiblicaController.getCount);

module.exports = router;