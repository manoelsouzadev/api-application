'use strict';

const { Number } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nomeAniversariante: {
    type: String,
    required: true,
    trim: true
  },
  data: {
    type: String,
    required: true,
    trim: true
  },
  sexo:{
    type: Number,
    trim: true
  }
});

module.exports = mongoose.model('Aniversario', schema);