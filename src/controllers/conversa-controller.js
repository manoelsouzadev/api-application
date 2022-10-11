"use strict";

const repository = require("../repositories/conversa-repository");

exports.post = async (req, res, next) => {

  const { idUsuarioAtendimento, lida } = data;

  try {
    await repository.create({
      room: req.body.room,
      idUsuario: req.body.idUsuario,
      idUsuarioReceptor: idUsuarioAtendimento,
      nomeUsuario: req.body.nomeUsuario,
      mensagem: req.body.mensagem,
      dataMensagem: req.body.dataMensagem,
      lida: lida
    });

    // emailService.send(
    //   'manoel.souza280@gmail.com',
    //   'Bem vindo ao node store',
    //   global.EMAIL_TMPL.replace('{0}', req.body.name)
    // );

    res.status(201).send({
      message: "Conversa cadastrada com sucesso!",
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.getByIdRoom = async (req, res, next) => {
  console.log("param",req.params.room)
  try {
    const data = await repository.getByIdRoom(req.params.room);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.put(req.params.id, req.body);
    res.status(200).send({ message: "Conversa atualizada com sucesso!" });
  } catch (e) {
    console.log("e put", e)
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.params.id);
    res.status(200).send({ message: "Mensagem removida com sucesso!" });
  } catch (e) {
    console.log(e)
    res.status(400).send({
      message: "Falha ao remover mensagem",
      data: e,
    });
  }
};

