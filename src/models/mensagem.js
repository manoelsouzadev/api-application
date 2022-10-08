"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  idConversa: {
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
  mensagem: {
    type: String,
    required: true,
  },
  dataMensagem: {
    type: String,
    required: true,
  }
});

mongoose.model("Mensagem", schema);
