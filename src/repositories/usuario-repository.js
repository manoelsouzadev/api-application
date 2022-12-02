'use  strict';
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.create = async data => {
  var usuario = new Usuario(data);
  await usuario.save();
};

exports.authenticate = async data => {
  console.log("data", data)
  const res = await Usuario.findOne({
    username: data.username,
    password: data.password,
    roles: data.roles
  });
  return res;
};

exports.getById = async id => {
  return await Usuario.findById(id);
};

exports.get = async (req, res, next)  => {
  return await Usuario.find();
};

exports.put = async (id, data) => {
  Usuario.findByIdAndUpdate(id, {
    $set: {
      username: data.username,
      password: data.password,
      roles: data.roles,
      membro: data.membro,
      dataNascimento: data.dataNascimento,
      nome: data.nome
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

exports.getCount = async(req, res) => {
  return await Usuario.find({}).count();
}

exports.getByMembro = async(req, res) => {
  return await Usuario.find({ membro: req.params.membro == 1 ? true : false }).count();
}
