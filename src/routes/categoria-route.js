'use strict';

const express = require('express');
const categoriaController = require('../controllers/categoria-controller');

const router = express.Router();

/**
 * @typedef Categoria
 * @property {string} nome.required
 * @property {string} slug.required
 * @property {string} date - Descrição formato - eg: 12:45
 */

/**
 * Este endpoint cria uma nova categoria
 * @route POST /categorias
 * @group categorias - Operações relacionadas as categorias
 * @param {Categoria.model} categoria.body.required - Criar nova categoria
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/', categoriaController.post);

/**
 * Este endpoint busca todos as categorias
 * @route GET /categorias
 * @group categorias - Operações relacionadas as categorias
 * @returns {Array.<Categoria>} 200 - Um array de categorias
 * @returns {Error}  default - Unexpected error
 */
router.get('/', categoriaController.get);

/**
 * Este endpoint busca uma categoria por id
 * @route GET /categorias/{id}
 * @group categorias - Operações relacionadas as categorias
 * @param {string} id.path.required
 * @returns {Object} 200 - Um model de categoria
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', categoriaController.getById);

/**
 * Este endpoint altera uma categoria
 * @route PUT /categorias/{id}
 * @group categorias - Operações relacionadas as categorias
 * @param {Categoria.model} categoria.body.required - Atualizar categoria
 * @param {string} id.path.required 
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', categoriaController.put);

/**
 * Este endpoint deleta uma categoria
 * @route DELETE /categorias/{id}
 * @param {string} id.path.required
 * @group categorias - Operações relacionadas as categorias
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', categoriaController.delete);

module.exports = router;