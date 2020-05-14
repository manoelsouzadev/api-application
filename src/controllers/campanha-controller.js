'use strict';

const mongoose = require('mongoose');
const Campanha = mongoose.model('Campanha');

exports.post = (req, res, next) => {
  var campanha = new Campanha(req.body);
  campanha
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Campanha cadastrada com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar a campanha',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
  Campanha.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Campanha.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
    Campanha.findByIdAndUpdate(req.params.id, {
    $set: {
      titulo: req.body.titulo,
      horario: req.body.horario,
      dataInicio: req.body.dataInicio,
      dataFinal: req.body.dataFinal,
      dia: req.body.dia,
      descricao: req.body.descricao,
      urlImagem: req.body.urlImagem
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Campanha atualizada com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar campanha',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
    Campanha.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Campanha removida com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover campanha',
        data: e
      });
    });
};

