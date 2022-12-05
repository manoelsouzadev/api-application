'use strict';

const express = require('express');
const eventoController = require('../controllers/evento-controller');
const authService = require("../services/auth-service");

const router = express.Router();

/**
 * @typedef Evento
 * @property {string} titulo.required
 * @property {string} horarioInicio.required 
 * @property {string} horarioTermino.required
 * @property {string} tipo.required
 * @property {string} local.required
 * @property {string} dataInicio.required
 * @property {string} dataFinal.required
 * @property {string} dia.required
 * @property {string} descricao.required
 * @property {string} urlImagem
 * @property {string} adicional
*/

/**
 * Este endpoint cria um novo evento
 * @route POST /eventos
 * @group eventos - Operações relacionadas aos eventos
 * @param {Evento.model} evento.body.required - Criar novo evento
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/', authService.authorize, eventoController.post);
router.get('/', authService.authorize, eventoController.get);
router.get('/:id', authService.authorize, eventoController.getById);
router.get('/tipo/:tipo', authService.authorize, eventoController.getByEventType);
router.put('/:id', authService.authorize, eventoController.put);
router.delete('/:id', authService.authorize, eventoController.delete);
router.get('/registros/count', authService.authorize, eventoController.getCount);

module.exports = router;