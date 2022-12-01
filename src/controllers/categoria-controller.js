'use strict';

const mongoose = require('mongoose');
const Categoria = mongoose.model('Categoria');

exports.post = (req, res, next) => {
  var categoria = new Categoria(req.body);
  categoria
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Categoria cadastrada com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar o categoria',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
    Categoria.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Categoria.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
    Categoria.findByIdAndUpdate(req.params.id, {
    $set: {
      nome: req.body.nome,
      slug: req.body.titulo
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Categoria atualizada com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar categoria',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
  Categoria.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Categoria removida com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover categoria',
        data: e
      });
    });
};

