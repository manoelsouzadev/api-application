'use strict';

const { Number } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  anotacao: {
    type: String,
    trim: true
  },
  idUsuario: {
    type: Number,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Anotacao', schema);