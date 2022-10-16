'use strict';

const express = require('express');
const campanhaController = require('../controllers/campanha-controller');

const router = express.Router();

/**
 * @typedef Campanha
 * @property {string} titulo.required
 * @property {string} horarioInicio.required 
 * @property {string} horarioTermino.required
 * @property {string} dataInicio.required
 * @property {string} dataFinal.required
 * @property {string} dia.required
 * @property {string} descricao.required
 * @property {string} urlImagem
 * @property {string} adicional
 */

/**
 * Este endpoint cria uma nova campanha
 * @route POST /campanhas
 * @group campanhas - Operações relacionadas as campanhas
 * @param {Campanha.model} campanha.body.required - Criar nova campanha
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/', campanhaController.post);

/**
 * Este endpoint busca todas as campanhas
 * @route GET /campanhas
 * @group campanhas - Operações relacionadas as campanhas
 * @returns {Array.<Campanha>} 200 - Um array de campanhas
 * @returns {Error}  default - Unexpected error
 */
router.get('/', campanhaController.get);

/**
 * Este endpoint busca uma campanha por id
 * @route GET /campanhas/{id}
 * @group campanhas - Operações relacionadas as campanhas
 * @param {string} id.path.required
 * @returns {Object} 200 - Um model de campanha
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', campanhaController.getById);

/**
 * Este endpoint altera uma campanha
 * @route PUT /campanhas/{id}
 * @group campanhas - Operações relacionadas as campanhas
 * @param {Campanha.model} campanha.body.required - Atualizar campanha
 * @param {string} id.path.required 
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', campanhaController.put);

/**
 * Este endpoint deleta uma campanha
 * @route DELETE /campanhas/{id}
 * @param {string} id.path.required
 * @group campanhas - Operações relacionadas as campanhas
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', campanhaController.delete);

router.get('/registros/count', campanhaController.getCount);

module.exports = router;