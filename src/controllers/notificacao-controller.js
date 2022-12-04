'use strict';

const mongoose = require('mongoose');
const Notificacao = mongoose.model('Notificacao');

exports.post = (req, res, next) => {
  var notificacao = new Notificacao(req.body);
  notificacao
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Notificação cadastrada com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar a notificação',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
    Notificacao.find().sort({data: 'desc'})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Notificacao.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
    Notificacao.findByIdAndUpdate(req.params.id, {
    $set: {
      notificacao: req.body.notificacao,
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Notificação atualizada com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar a notificação',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
    Notificacao.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Notificação removida com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover notificação',
        data: e
      });
    });
};

exports.getNovasNotificacoes = async (req, res) => {
    await Notificacao.find({ data: { $gte: new Date().toLocaleDateString() }}).then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
  };
