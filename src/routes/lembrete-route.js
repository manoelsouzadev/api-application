'use strict';

const express = require('express');
const lembreteController = require('../controllers/lembrete-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.post('/', authService.authorize, lembreteController.post);
router.get('/', authService.authorize, lembreteController.get);
router.get('/:id', authService.authorize, lembreteController.getById);
router.put('/:id', authService.authorize, lembreteController.put);
router.delete('/:id', authService.authorize, lembreteController.delete);
router.get('/registros/count', authService.authorize, lembreteController.getCount);

module.exports = router;

