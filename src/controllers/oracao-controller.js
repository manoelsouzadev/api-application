'use strict';

const mongoose = require('mongoose');
const Oracao = mongoose.model('oracao');

exports.post = (req, res, next) => {
  var oracao = new Oracao(req.body);
  oracao 
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Oração cadastrada com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar oração',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
  Oracao.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Oracao.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  Oracao.findByIdAndUpdate(req.params.id, {
    $set: {
      titulo: req.body.titulo,
      horario: req.body.horario,
      dia: req.body.dia,
      descricao: req.body.descricao,
      urlImagem: req.body.urlImagem
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Oração atualizada com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar oração',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
  Oracao.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Oração removida com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover oração',
        data: e
      });
    });
};

