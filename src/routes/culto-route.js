'use strict';

const express = require('express');
const cultoController = require('../controllers/culto-controller');

const router = express.Router();

/**
 * @typedef Culto
 * @property {string} titulo.required
 * @property {string} horarioInicio.required - Descrição formato  - eg: 12:02
 * @property {string} horarioTermino.required - Descrição formato - eg: 12:45
 * @property {string} dia.required - Descrição formato dia - eg: Sexta-feira
 * @property {string} descricao.required
 * @property {string} urlImagem
 * @property {string} adicional
 */

/**
 * Este endpoint cria um novo culto
 * @route POST /cultos
 * @group cultos - Operações relacionadas aos cultos
 * @param {Culto.model} culto.body.required - Criar novo culto
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/', cultoController.post);

/**
 * Este endpoint busca todos os cultos
 * @route GET /cultos
 * @group cultos - Operações relacionadas aos cultos
 * @returns {Array.<Culto>} 200 - Um array de cultos
 * @returns {Error}  default - Unexpected error
 */
router.get('/', cultoController.get);

/**
 * Este endpoint busca um culto por id
 * @route GET /cultos/{id}
 * @group cultos - Operações relacionadas aos cultos
 * @param {string} id.path.required
 * @returns {Object} 200 - Um model de culto
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', cultoController.getById);

/**
 * Este endpoint altera um culto
 * @route PUT /cultos/{id}
 * @group cultos - Operações relacionadas aos cultos
 * @param {Culto.model} culto.body.required - Atualizar culto
 * @param {string} id.path.required 
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', cultoController.put);

/**
 * Este endpoint deleta um culto
 * @route DELETE /cultos/{id}
 * @param {string} id.path.required
 * @group cultos - Operações relacionadas aos cultos
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', cultoController.delete);

router.get('/registros/count', cultoController.getCount);

module.exports = router;