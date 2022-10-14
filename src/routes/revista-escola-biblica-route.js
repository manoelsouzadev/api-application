'use strict';

const express = require('express');
const revistaEscolaBiblicaController = require('../controllers/revista-escola-biblica-controller');

const router = express.Router();

router.post('/', revistaEscolaBiblicaController.post);
router.get('/', revistaEscolaBiblicaController.get);
router.get('/:id', revistaEscolaBiblicaController.getById);
router.put('/:id', revistaEscolaBiblicaController.put);
router.delete('/:id', revistaEscolaBiblicaController.delete);
router.get('/registros/count', revistaEscolaBiblicaController.getCount);

module.exports = router;