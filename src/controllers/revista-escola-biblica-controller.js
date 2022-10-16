"use strict";

const mongoose = require("mongoose");
const RevistaEscolaBiblica = mongoose.model("RevistaEscolaBiblica");

exports.post = (req, res, next) => {
  var revista = new RevistaEscolaBiblica(req.body);
  revista
    .save()
    .then(() => {
      res.status(201).send({
        message: "Revista cadastrada com sucesso!",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao cadastrar a revista",
        data: e,
      });
    });
};

exports.get = (req, res, next) => {
  RevistaEscolaBiblica.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  RevistaEscolaBiblica.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  RevistaEscolaBiblica.findByIdAndUpdate(req.params.id, {
      $set: {
        nome: req.body.nome,
        valor: req.body.valor,
      },
    })
    .then((x) => {
      res.status(200).send({
        message: "Revista atualizada com sucesso!"
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao atualizar a revista",
        data: e,
      });
    });
};

exports.delete = (req, res, next) => {
  RevistaEscolaBiblica.findByIdAndRemove(req.params.id)
    .then((x) => {
      res.status(200).send({
        message: "Revista removida com sucesso!"
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao remover a revista",
        data: e,
      });
    });
};

exports.getCount = async (req, res) => {
  return await RevistaEscolaBiblica.find({}).count();
};