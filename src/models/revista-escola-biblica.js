'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  valor: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('RevistaEscolaBiblica', schema);