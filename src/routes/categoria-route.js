'use strict';

const express = require('express');
const categoriaController = require('../controllers/categoria-controller');

const router = express.Router();

router.post('/', categoriaController.post);
router.get('/', categoriaController.get);
router.get('/:id', categoriaController.getById);
router.put('/:id', categoriaController.put);
router.delete('/:id', categoriaController.delete);

module.exports = router;
