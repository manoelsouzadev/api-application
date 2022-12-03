'use strict';

const express = require('express');
const dashboardController = require('../controllers/dashboard-controller');

const router = express.Router();

router.get('/gerais/counts', dashboardController.getCounts);

router.get('/usuarios/count', dashboardController.getCountUsuarios);

router.get('/escola-biblica/dividas/total', dashboardController.getValoresDevidosEscolaBiblica);

router.get('/escola-biblica/revistas/total', dashboardController.getCountRevistasEscolaBiblica);

router.get('/escola-biblica/divida/count', dashboardController.getCountDividasEscolaBiblica);

router.get('/usuarios/membro/:membro', dashboardController.getUsuariosPorMembro);

router.post("/usuarios/nivel-acesso/count", dashboardController.getUsuariosPorNivelAcesso);

module.exports = router;
