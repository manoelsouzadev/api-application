'use strict';

const express = require('express');
const eventoController = require('../controllers/evento-controller');

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
router.post('/', eventoController.post);
router.get('/', eventoController.get);
router.get('/:id', eventoController.getById);
router.get('/tipo/:tipo', eventoController.getByEventType);
router.put('/:id', eventoController.put);
router.delete('/:id', eventoController.delete);
router.get('/registros/count', eventoController.getCount);

module.exports = router;