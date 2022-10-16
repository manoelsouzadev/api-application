'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  username: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: String
  },
  membro: {
    type: Boolean,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: [String],
    required: true,
    enum: ['usuario_interno', 'usuario_externo', 'admin'],
    default: 'usuario_externo'
  }]
});

module.exports = mongoose.model('Usuario', schema);