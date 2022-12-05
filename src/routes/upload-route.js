'use strict';

const express = require('express');
const uploadController = require('../controllers/upload-controller');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: "./uploads"});
const authService = require("../services/auth-service");

const router = express.Router();

router.post('/', authService.authorize, multipartMiddleware, uploadController.upload);
router.get('/autorizar', authService.authorize, uploadController.autorizar);
router.get('/oauth2', uploadController.getOAuth);
router.delete("/remover-autorizacao", authService.authorize, uploadController.removerAutorizacao);

module.exports = router;