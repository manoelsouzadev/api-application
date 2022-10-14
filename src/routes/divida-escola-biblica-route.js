'use strict';

const express = require('express');
const dividaEscolaBiblicaController = require('../controllers/divida-escola-biblica-controller');

const router = express.Router();

router.post('/', dividaEscolaBiblicaController.post);
router.get('/', dividaEscolaBiblicaController.get);
router.get('/:id', dividaEscolaBiblicaController.getById);
router.put('/:id', dividaEscolaBiblicaController.put);
router.delete('/:id', dividaEscolaBiblicaController.delete);
router.get('/valores/devidos', dividaEscolaBiblicaController.getValoresDevidosEscolaBiblica);
router.get('/registros/count', dividaEscolaBiblicaController.getCount);

module.exports = router;