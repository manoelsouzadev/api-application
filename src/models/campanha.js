'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  horarioInicio: {
    type: String,
    required: true,
    trim: true
  },
  horarioTermino: {
    type: String,
    required: true,
    trim: true
  },
  dataInicio:{
    type: String,
    required: true,
    trim: true
  },
  dataFinal:{
    type: String,
    required: true,
    trim: true
  },
  dia: {
    type: String,
    required: true,
    trim: true
  },
  descricao: {
    type: String,
    required: true,
    trim: true
  },
  urlImagem:{
    type: String,
    //required: true,
    trim: true
  },
   adicional:{
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Campanha', schema);