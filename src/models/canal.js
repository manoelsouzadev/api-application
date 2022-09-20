'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  idCanal: {
    type: String,
    required: true,
    trim: true
  },
  nome: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Canal', schema);