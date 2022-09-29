'use strict';

const mongoose = require('mongoose');
const Publicacao = mongoose.model('Publicacao');

exports.post = (req, res, next) => {
  var publicacao = new Publicacao(req.body);
  publicacao
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Publicação cadastrada com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar a publicação',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
    Publicacao.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getListById = (req, res, next) => {
    Publicacao.find(req.body.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Publicacao.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
    Publicacao.findByIdAndUpdate(req.params.id, {
    $set: {
      titulo: req.body.titulo,
      slug: req.body.slug,
      descricao: req.body.descricao,
      texto: req.body.texto,
      textoSemFormatacao: req.body.textoSemFormatacao,
      categoria: req.body.categoria,
      data: req.body.data,
      urlVideo: req.body.urlVideo,
      categoriaVideo: req.body.categoriaVideo,
      idTransmissaoAoVivo: req.body.idTransmissaoAoVivo
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Publicação atualizada com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar a publicação',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
    Publicacao.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Publicação removida com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover publicação',
        data: e
      });
    });
};

