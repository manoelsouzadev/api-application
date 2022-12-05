'use strict';

const express = require('express');
const ensaioController = require('../controllers/ensaio-controller');
const authService = require("../services/auth-service");

const router = express.Router();

/**
 * @typedef Ensaio
 * @property {string} titulo.required
 * @property {string} horarioInicio.required 
 * @property {string} horarioTermino.required
 * @property {string} dia.required
 * @property {string} descricao.required
 * @property {string} urlImagem
 * @property {string} adicional
*/

/**
 * Este endpoint cria um novo ensaio
 * @route POST /ensaios
 * @group ensaios - Operações relacionadas aos ensaios
 * @param {Ensaio.model} ensaio.body.required - Criar novo ensaio
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/', authService.authorize, ensaioController.post);

/**
 * Este endpoint busca todos os ensaios
 * @route GET /ensaios
 * @group ensaios - Operações relacionadas aos ensaios
 * @returns {Array.<Ensaio>} 200 - Um array de ensaios
 * @returns {Error}  default - Unexpected error
 */
router.get('/', authService.authorize, ensaioController.get);

/**
 * Este endpoint busca um ensaio por id
 * @route GET /ensaios/{id}
 * @group ensaios - Operações relacionadas aos ensaios
 * @param {string} id.path.required
 * @returns {Object} 200 - Um model de ensaio
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', authService.authorize, ensaioController.getById);

/**
 * Este endpoint altera um ensaio
 * @route PUT /ensaios/{id}
 * @group ensaios - Operações relacionadas aos ensaios
 * @param {Ensaio.model} ensaio.body.required - Atualizar ensaio
 * @param {string} id.path.required 
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', authService.authorize, ensaioController.put);

/**
 * Este endpoint deleta um ensaio
 * @route DELETE /ensaios/{id}
 * @param {string} id.path.required
 * @group ensaios - Operações relacionadas aos ensaios
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', authService.authorize, ensaioController.delete);

router.get('/registros/count', authService.authorize, ensaioController.getCount);

module.exports = router;

