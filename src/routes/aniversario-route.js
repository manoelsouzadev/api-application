'use strict';

const express = require('express');
const aniversarioController = require('../controllers/aniversario-controller');
const authService = require("../services/auth-service");

const router = express.Router();

/**
 * @typedef Aniversario
 * @property {string} nomeAniversariante.required
 * @property {string} data.required - Descrição formato  - eg: 1996-05-26
 * @property {number} sexo - Descrição formato - eg: 1 ou 2 (1 - Masculino, 2 - Feminino)
*/

/**
 * Este endpoint cria um novo aniversário
 * @route POST /aniversarios
 * @group aniversarios - Operações relacionadas aos aniversários
 * @param {Aniversario.model} aniversario.body.required - Criar novo aniverário
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/', authService.authorize, aniversarioController.post);

/**
 * Este endpoint busca todos os aniversários
 * @route GET /aniversarios
 * @group aniversarios - Operações relacionadas aos aniversários
 * @returns {Array.<Aniversario>} 200 - Um array de aniversários
 * @returns {Error}  default - Unexpected error
 */
router.get('/', authService.authorize, aniversarioController.get);

/**
 * Este endpoint busca um aniversário por id
 * @route GET /aniversarios/{id}
 * @group aniversarios - Operações relacionadas aos aniversários
 * @param {string} id.path.required
 * @returns {Object} 200 - Um model de aniversário
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', authService.authorize, aniversarioController.getById);

/**
 * Este endpoint altera um aniversário
 * @route PUT /aniversarios/{id}
 * @group aniversarios - Operações relacionadas aos aniversários
 * @param {Aniversario.model} aniversario.body.required - Atualizar aniversário
 * @param {string} id.path.required 
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', authService.authorize, aniversarioController.put);

/**
 * Este endpoint deleta um aniversário
 * @route DELETE /aniversarios/{id}
 * @param {string} id.path.required
 * @group aniversarios - Operações relacionadas aos aniversários
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', authService.authorize, aniversarioController.delete);

router.get('/registros/count', authService.authorize, aniversarioController.getCount);

module.exports = router;