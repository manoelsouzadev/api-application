'use strict';

const express = require('express');
const conversaController = require('../controllers/conversa-controller');

const router = express.Router();

router.post('/', conversaController.post);
router.get('/:idConversa/mensagens', conversaController.getByIdConversa);
router.put('/:id', conversaController.put);
router.delete('/:id', conversaController.delete);

module.exports = router;