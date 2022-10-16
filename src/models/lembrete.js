'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  texto: {
    type: String,
    required: true,
    trim: true
  },
  titulo: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Lembrete', schema);