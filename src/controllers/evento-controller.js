'use strict';

const mongoose = require('mongoose');
const Evento = mongoose.model('Evento');

exports.post = (req, res, next) => {
  var evento = new Evento(req.body);
  evento
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Evento cadastrado com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar o evento',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
  Evento.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Evento.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getByEventType = (req, res, next) => {
  Evento.find({ tipo: req.params.tipo})
  .then(data => {
    res.status(200).send(data);
  })
  .catch(e => {
    res.status(400).send(e);
  });
};


exports.put = (req, res, next) => {
    Evento.findByIdAndUpdate(req.params.id, {
    $set: {
      titulo: req.body.titulo,
      horarioInicio: req.body.horarioInicio,
      horarioTermino: req.body.horarioTermino,
      local: req.body.local,
      dataInicio: req.body.dataInicio,
      dataFinal: req.body.dataFinal,
      dia: req.body.dia,
      tipo: req.body.tipo,
      descricao: req.body.descricao,
      urlImagem: req.body.urlImagem,
      adicional: req.body.adicional
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Evento atualizado com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar o evento',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
    Evento.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({ message: 'Evento removido com sucesso!' });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover o evento',
        data: e
      });
    });
};

exports.getCount = async (req, res) => {
  return await Evento.find({}).count();
};