'use strict';

const express = require('express');
const ensaioController = require('../controllers/ensaio-controller');

const router = express.Router();

router.post('/', ensaioController.post);
router.get('/', ensaioController.get);
router.get('/:id', ensaioController.getById);
router.put('/:id', ensaioController.put);
router.delete('/:id', ensaioController.delete);

module.exports = router;

