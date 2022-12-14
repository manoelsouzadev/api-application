"use  strict";
const mongoose = require("mongoose");
const Mensagem = require("../models/mensagem");

exports.save = async data => {
  var mensagem = new Mensagem(data);
  await mensagem.save();
};

exports.getByIdRoom = async (room) => {
  return await Mensagem.find().where("room").equals(room);
};

exports.put = async (id, data) => {
  Mensagem.findByIdAndUpdate(id, {
    $set: {
      room: data.room,
      idUsuario: data.idUsuario,
      nomeUsuario: data.nomeUsuario,
      mensagem: data.mensagem,
      dataMensagem: data.dataMensagem
    },
  });
};

exports.delete = async (id) => {
  await Mensagem.findOneAndRemove(id);
};
