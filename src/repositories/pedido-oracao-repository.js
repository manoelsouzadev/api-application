"use  strict";
const mongoose = require("mongoose");
const Pedido = require("../models/pedido-oracao");
const Mensagem = require("../models/mensagem");

exports.post = async data => {
  var pedido = new Pedido(data);
  await pedido.save();
};

exports.getById = async (id) => {
  return await Pedido.find().where("id").equals(id);
};

exports.get = async () => {
  return await Pedido.find();
};

exports.put = async (id, data) => {
  Pedido.findByIdAndUpdate(id, {
    $set: {
      status: data.status,
      idUsuarioAtendimento: data.idUsuarioAtendimento
    },
  });
};

exports.delete = async (id) => {
  await Pedido.findOneAndRemove(id);
};

exports.getCount = async (req, res, next) => {
 return await Mensagem.find({}).distinct('idUsuario');
}
