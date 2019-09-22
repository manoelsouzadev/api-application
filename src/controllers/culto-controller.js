'use strict';

const mongoose = require('mongoose');
const Culto = mongoose.model('culto');

exports.post = (req, res, next) => {
  var culto = new Culto(req.body);
  culto
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Culto cadastrado com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar o culto',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
  Culto.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Culto.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  Culto.findByIdAndUpdate(req.params.id, {
    $set: {
      titulo: req.body.titulo,
      horario: req.body.horario,
      dia: req.body.dia,
      descricao: req.body.descricao
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Culto atualizado com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar culto',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
  Culto.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Culto removido com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover culto',
        data: e
      });
    });
};

