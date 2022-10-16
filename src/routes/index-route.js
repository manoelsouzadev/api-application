'use strict';

const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        title: "Node API",
        version: "0.0.1"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).send(req.body);
});

module.exports = router