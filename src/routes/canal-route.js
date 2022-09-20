'use strict';

const express = require('express');
const canalController = require('../controllers/canal-controller');

const router = express.Router();

router.post('/', canalController.post);
router.get('/', canalController.get);
router.get('/:id', canalController.getById);
router.put('/:id', canalController.put);
router.delete('/:id', canalController.delete);

module.exports = router;

