'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nomeDevedor: {
    type: String,
    required: true,
    trim: true
  },
  revista: {
    type: String,
    required: true,
    trim: true
  },
  previsaoPagamento: {
    type: String,
    required: true,
    trim: true
  },
  situacao: {
    type: [String],
    required: true,
    enum: ['pago', 'nao_pago', 'em_pagamento'],
    default: 'nao_pago'
  },
  valorDevido: {
    type: Number,
    required: true
  },
  valorPago:{
    type: Number
  },
  saldoDevedor:{
    type: Number
  }
});

module.exports = mongoose.model('DividaEscolaBiblica', schema);