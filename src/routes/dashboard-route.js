'use strict';

const express = require('express');
const dashboardController = require('../controllers/dashboard-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.get('/gerais/counts', authService.authorize, dashboardController.getCounts);

router.get('/usuarios/count', authService.authorize, dashboardController.getCountUsuarios);

router.get('/escola-biblica/dividas/total', authService.authorize, dashboardController.getValoresDevidosEscolaBiblica);

router.get('/escola-biblica/revistas/total', authService.authorize, dashboardController.getCountRevistasEscolaBiblica);

router.get('/escola-biblica/divida/count', authService.authorize, dashboardController.getCountDividasEscolaBiblica);

router.get('/usuarios/membro/:membro', authService.authorize, dashboardController.getUsuariosPorMembro);

router.post("/usuarios/nivel-acesso/count", authService.authorize, dashboardController.getUsuariosPorNivelAcesso);

module.exports = router;
