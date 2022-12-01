"use strict";

const mongoose = require("mongoose");
const Canal = mongoose.model("Canal");

exports.post = (req, res, next) => {
  var canal = new Canal(req.body);
  canal
    .save()
    .then(() => {
      res.status(201).send({
        message: "Canal cadastrado com sucesso!",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao cadastrar o canal",
        data: e,
      });
    });
};

exports.get = (req, res, next) => {
  Canal.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Canal.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  Canal.findByIdAndUpdate(req.params.id, {
    $set: {
      idCanal: req.body.idCanal,
      nome: req.body.nome
    },
  })
    .then((x) => {
      res.status(200).send({ message: "Canal atualizado com sucesso!" });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao atualizar o canal",
        data: e,
      });
    });
};

exports.delete = (req, res, next) => {
  Canal.findByIdAndRemove(req.params.id)
    .then((x) => {
      res.status(200).send({ message: "Canal removido com sucesso!" });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao remover canal",
        data: e,
      });
    });
};
