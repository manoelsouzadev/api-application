'use strict';

const express = require('express');
const uploadController = require('../controllers/upload-controller');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: "./uploads"});

const router = express.Router();

router.post('/', multipartMiddleware, uploadController.post);
router.get('/oauth2', uploadController.getOAuth);

module.exports = router;