'use strict';

const mongoose = require('mongoose');
const Ensaio = mongoose.model('ensaio');

exports.post = (req, res, next) => {
  var ensaio = new Ensaio(req.body);
  ensaio
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Ensaio cadastrado com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar o ensaio',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
  Ensaio.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Ensaio.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  Ensaio.findByIdAndUpdate(req.params.id, {
    $set: {
      titulo: req.body.titulo,
      horario: req.body.horario,
      dia: req.body.dia,
      descricao: req.body.descricao,
      urlImagem: req.body.urlImagem
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Ensaio atualizado com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar ensaio',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
  Ensaio.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Ensaio removido com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover ensaio',
        data: e
      });
    });
};

