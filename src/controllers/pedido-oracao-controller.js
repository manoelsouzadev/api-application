'use  strict';
const mongoose = require('mongoose');
const PedidoOracaoRepository = require("../repositories/pedido-oracao-repository");

exports.post = async data => {
  await PedidoOracaoRepository.post(data);
};

exports.getById = async (req, res, id) => {
    return await PedidoOracaoRepository.getById(id).then(data => {
        res.status(200).send(data);
      })
      .catch(e => {
        res.status(400).send(e);
      });; 
};

exports.get = async (req, res) => {
    return await PedidoOracaoRepository.get().then(data => {
        res.status(200).send(data);
      })
      .catch(e => {
        res.status(400).send(e);
      });; 
};

exports.put = async (id, data) => {
   await  PedidoOracaoRepository.put(id, data);
};

exports.delete = async(id) => {
  await PedidoOracaoRepository.delete(id);
};
