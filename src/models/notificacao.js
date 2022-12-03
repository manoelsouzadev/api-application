'use strict';

const { Number } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  notificacao: {
    type: String,
    required: true,
    trim: true
  },
  data: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Notificacao', schema);