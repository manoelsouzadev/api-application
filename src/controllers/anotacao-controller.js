'use strict';

const mongoose = require('mongoose');
const Anotacao = mongoose.model('Anotacao');

exports.post = (req, res, next) => {
    var anotacao = new Anotacao(req.body);
    anotacao
        .save()
        .then(() => {
            res.status(201).send({
                message: 'Anotação cadastrada com sucesso!'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar a anotação',
                data: e
            });
        });
};

exports.get = (req, res, next) => {
    Anotacao.find()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    Anotacao.findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
};

exports.getByIdUsuario = (req, res) => {
    Anotacao.find({ idUsuario: req.params.idUsuario })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
};

exports.put = (req, res, next) => {
    Anotacao.findByIdAndUpdate(req.params.id, {
            $set: {
                anotacao: req.body.anotacao,
                idUsuario: req.body.idUsuario
            }
        })
        .then(x => {
            res.status(200).send({
                message: 'Anotação atualizada com sucesso!'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar anotação',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    Anotacao.findByIdAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Anotação removida com sucesso!'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao remover anotação',
                data: e
            });
        });
};