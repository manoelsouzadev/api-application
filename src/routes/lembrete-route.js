'use strict';

const express = require('express');
const lembreteController = require('../controllers/lembrete-controller');

const router = express.Router();

router.post('/', lembreteController.post);
router.get('/', lembreteController.get);
router.get('/:id', lembreteController.getById);
router.put('/:id', lembreteController.put);
router.delete('/:id', lembreteController.delete);

module.exports = router;

