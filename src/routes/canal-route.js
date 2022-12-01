'use strict';

const express = require('express');
const canalController = require('../controllers/canal-controller');

const router = express.Router();

/**
 * @typedef Canal
 * @property {string} idCanal.required
 * @property {string} nome.required
 */

/**
 * Este endpoint cria um novo canal
 * @route POST /canais
 * @group canais - Operações relacionadas aos canais
 * @param {Canal.model} canal.body.required - Criar novo canal
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/', canalController.post);

/**
 * Este endpoint busca todos os canais
 * @route GET /canais
 * @group canais - Operações relacionadas aos canais
 * @returns {Array.<Canal>} 200 - Um array de canais
 * @returns {Error}  default - Unexpected error
 */
router.get('/', canalController.get);

/**
 * Este endpoint busca um canal por id
 * @route GET /canais/{id}
 * @group canais - Operações relacionadas aos canais
 * @param {string} id.path.required
 * @returns {Object} 200 - Um model de canal
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', canalController.getById);

/**
 * Este endpoint altera um canal
 * @route PUT /canais/{id}
 * @group canais - Operações relacionadas aos canais
 * @param {Canal.model} canal.body.required - Atualizar canal
 * @param {string} id.path.required 
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', canalController.put);

/**
 * Este endpoint deleta um canal
 * @route DELETE /canais/{id}
 * @param {string} id.path.required
 * @group canais - Operações relacionadas aos canais
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', canalController.delete);

module.exports = router;

