'use strict';

const express = require('express');
const eventoController = require('../controllers/evento-controller');

const router = express.Router();

router.post('/', eventoController.post);
router.get('/', eventoController.get);
router.get('/:id', eventoController.getById);
router.get('/tipo/:tipo', eventoController.getByEventType);
router.put('/:id', eventoController.put);
router.delete('/:id', eventoController.delete);

module.exports = router;