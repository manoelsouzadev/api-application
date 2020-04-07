'use strict';

const mongoose = require('mongoose');
const Lembrete = mongoose.model('lembrete');

exports.post = (req, res, next) => {
  var lembrete = new Lembrete(req.body);
  lembrete
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Lembrete cadastrado com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar o lembrete',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
    Lembrete.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Lembrete.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
    Lembrete.findByIdAndUpdate(req.params.id, {
    $set: {
      texto: req.body.texto
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Lembrete atualizado com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar o lembrete',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
    Lembrete.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Lembrete removido com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover lembrete',
        data: e
      });
    });
};

