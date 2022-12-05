'use strict';

const express = require('express');
const revistaEscolaBiblicaController = require('../controllers/revista-escola-biblica-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.post('/', authService.authorize, revistaEscolaBiblicaController.post);
router.get('/', authService.authorize, revistaEscolaBiblicaController.get);
router.get('/:id', authService.authorize, revistaEscolaBiblicaController.getById);
router.put('/:id', authService.authorize, revistaEscolaBiblicaController.put);
router.delete('/:id', authService.authorize, revistaEscolaBiblicaController.delete);
router.get('/registros/count', authService.authorize, revistaEscolaBiblicaController.getCount);

module.exports = router;