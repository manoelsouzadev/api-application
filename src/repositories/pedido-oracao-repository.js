"use  strict";
const mongoose = require("mongoose");
const Pedido = require("../models/pedido-oracao");

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
