'use strict';

const express = require('express');
const uploadController = require('../controllers/upload-controller');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: "./uploads"});

const router = express.Router();

router.post('/', multipartMiddleware, uploadController.upload);
router.get('/autorizar', uploadController.autorizar);
router.get('/oauth2', uploadController.getOAuth);
router.delete("/remover-autorizacao", uploadController.removerAutorizacao);

module.exports = router;