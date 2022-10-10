"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  room:{
    type: String,
    required: true,
  },
  idUsuario: {
    type: String,
    required: true,
  },
  nomeUsuario: {
    type: String,
    required: true,
  },
  idUsuarioAtendimento:{
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
  }
});

module.exports = mongoose.model("PedidoOracao", schema); 