'use strict';

const mongoose = require('mongoose');
const Aniversario = mongoose.model('Aniversario');

exports.post = (req, res, next) => {
  var aniversario = new Aniversario(req.body);
  aniversario
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Aniversário cadastrado com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar a aniversário',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
  Aniversario.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Aniversario.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  Aniversario.findByIdAndUpdate(req.params.id, {
      $set: {
        nomeAniversariante: req.body.nomeAniversariante,
        data: req.body.data,
        sexo: req.body.sexo
      }
    })
    .then(x => {
      res.status(200).send({
        message: 'Aniversário atualizado com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar aniversário',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
  Aniversario.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({
        message: 'Aniversário removido com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover Aniversário',
        data: e
      });
    });
};

exports.getCount = async (req, res) => {
  return await Aniversario.find({}).count();
};