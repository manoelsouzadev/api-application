'use strict';

const express = require('express');
const conversaController = require('../controllers/conversa-controller');
const authService = require("../services/auth-service");

const router = express.Router();

router.post('/', authService.authorize, conversaController.post);
router.get('/:room/mensagens', authService.authorize, conversaController.getByIdRoom);
router.put('/:id', authService.authorize, conversaController.put);
router.delete('/:id', authService.authorize, conversaController.delete);

module.exports = router;