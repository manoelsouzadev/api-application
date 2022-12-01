"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  textoSemFormatacao: {
    type: String,
    required: true,
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: "Publicacao",
    required: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
  urlVideo: {
    type: String,
  },
  categoriaVideo: {
    type: String,
    required: true,
  },
  idTransmissaoAoVivo: {
    type: String,
  },
  idUsuarioCriador: {
    type: String,
    //required: true
  },
});

mongoose.model("Publicacao", schema);
