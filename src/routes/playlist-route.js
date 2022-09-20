'use strict';

const express = require('express');
const playlistController = require('../controllers/playlist-controller');

const router = express.Router();

router.post('/', playlistController.post);
router.get('/', playlistController.get);
router.get('/:id', playlistController.getById);
router.put('/:id', playlistController.put);
router.delete('/:id', playlistController.delete);

module.exports = router;

