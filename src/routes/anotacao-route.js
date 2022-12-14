'use strict';

const express = require('express');
const anotacaoController = require('../controllers/anotacao-controller');
const authService = require("../services/auth-service");

const router = express.Router();

/**
 * @typedef Anotacao
 * @property {string} anotacao
 * @property {string} idUsuario.required
*/

/**
 * Este endpoint cria uma nova anotação
 * @route POST /anotacoes
 * @group anotacoes - Operações relacionadas as anotações
 * @param {Anotacao.model} anotacao.body.required - Criar nova anotação
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/', authService.authorize, anotacaoController.post);

/**
 * Este endpoint busca todas as anotações
 * @route GET /anotacoes
 * @group anotacoes - Operações relacionadas as anotações
 * @returns {Array.<Anotacao>} 200 - Um array de anotações
 * @returns {Error}  default - Unexpected error
 */
router.get('/', authService.authorize, anotacaoController.get);

/**
 * Este endpoint busca todas as anotações realcionadas a um usuário específico
 * @route GET /anotacoes/{id}
 * @group anotacoes - Operações relacionadas as anotações
 * @returns {Array.<Anotacao>} 200 - Um array de anotações
 * @returns {Error}  default - Unexpected error
 */
 router.get('/usuario/:idUsuario', authService.authorize, anotacaoController.getByIdUsuario);

/**
 * Este endpoint busca uma anotação por id
 * @route GET /anotacoes/{id}
 * @group anotacoes - Operações relacionadas as anotações
 * @param {string} id.path.required
 * @returns {Object} 200 - Um model de anotação
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', authService.authorize, anotacaoController.getById);

/**
 * Este endpoint altera uma anotação
 * @route PUT /anotacoes/{id}
 * @group anotacoes - Operações relacionadas as anotações
 * @param {Anotacao.model} anotacao.body.required - Atualizar anotação
 * @param {string} id.path.required 
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', authService.authorize, anotacaoController.put);

/**
 * Este endpoint deleta uma anotação
 * @route DELETE /anotacoes/{id}
 * @param {string} id.path.required
 * @group anotacoes - Operações relacionadas as anotações
 * @returns {Object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', authService.authorize, anotacaoController.delete);

module.exports = router;