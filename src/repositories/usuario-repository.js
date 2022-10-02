'use  strict';
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.create = async data => {
  var usuario = new Usuario(data);
  await usuario.save();
};

exports.authenticate = async data => {
  const res = await Usuario.findOne({
    username: data.username,
    password: data.password
  });
  return res;
};

exports.getById = async id => {
  const res = await Usuario.findById(id);
  return res;
};

exports.put = async (id, data) => {
  Usuario.findByIdAndUpdate(id, {
    $set: {
      password: data.password,
      roles: data.roles,
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
    })
    .catch(e => {
      
      res.status(400).send({
        message: 'Falha ao atualizar a usuário',
        data: e
      });
    });
};

exports.delete = async(id) => {
  await Usuario.findOneAndRemove(id);
};
