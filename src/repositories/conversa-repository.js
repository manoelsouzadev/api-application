'use  strict';
const mongoose = require('mongoose');
const Mensagem = mongoose.model('Mensagem');

exports.create = async data => {
  var mensagem = new Mensagem(data);
  await mensagem.save();
};

exports.getByIdConversa = async (idConversa) => {
    return await Mensagem.find().where('idConversa').equals(idConversa); 
};

exports.put = async (id, data) => {
    Mensagem.findByIdAndUpdate(id, {
    $set: {
        idConversa: req.body.idConversa,
        idUsuario: req.body.idUsuario,
        nomeUsuario: req.body.nomeUsuario,
        mensagem: req.body.mensagem,
        dataMensagem: req.body.dataMensagem
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Mensagem atualizada com sucesso!' });
    })
    .catch(e => {
      
      res.status(400).send({
        message: 'Falha ao atualizar a mensagem',
        data: e
      });
    });
};

exports.delete = async(id) => {
  await Mensagem.findOneAndRemove(id);
};
