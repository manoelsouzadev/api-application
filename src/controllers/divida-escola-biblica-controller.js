"use strict";

const mongoose = require("mongoose");
const DividaEscolaBiblica = mongoose.model("DividaEscolaBiblica");

exports.post = (req, res, next) => {
  var divida = new DividaEscolaBiblica(req.body);
  divida
    .save()
    .then(() => {
      res.status(201).send({
        message: "Dívida cadastrada com sucesso!",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao cadastrar a dívida",
        data: e,
      });
    }); 
};

exports.get = (req, res, next) => {
  DividaEscolaBiblica.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  DividaEscolaBiblica.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  DividaEscolaBiblica.findByIdAndUpdate(req.params.id, {
    $set: {
      nomeDevedor: req.body.nomeDevedor,
      revista: req.body.revista,
      previsaoPagamento: req.body.previsaoPagamento,
      situacao: req.body.situacao,
      valorDevido: req.body.valorDevido,
      valorPago: req.body.valorPago,
      saldoDevedor: req.body.saldoDevedor,
      troco: req.body.troco
    },
  })
    .then((x) => {
      res.status(200).send({ message: "Dívida atualizada com sucesso!" });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao atualizar dívida",
        data: e,
      });
    });
};

exports.delete = (req, res, next) => {
  DividaEscolaBiblica.findByIdAndRemove(req.params.id)
    .then((x) => {
      res.status(200).send({ message: "Dívida removida com sucesso!" });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao remover dívida",
        data: e,
      });
    });
};

exports.getCount = async (req, res) => {
  return await DividaEscolaBiblica.find({}).count();
};

exports.getValoresDevidosEscolaBiblica = (req, res, next) => {
    DividaEscolaBiblica.find({ }).select("valorDevido")
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((e) => {
        return res.status(400).send(e);
      });

      
  };
