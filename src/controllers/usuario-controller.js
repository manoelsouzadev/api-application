"use strict";

const validationContract = require("../validators/fluent-validator");
const repository = require("../repositories/usuario-repository");
const md5 = require("md5");
const authService = require("../services/auth-service");

exports.post = async (req, res, next) => {
  let contract = new validationContract();
  contract.hasMinLen(
    req.body.username,
    3,
    "O nome deve conter pelo menos 3 caracteres"
  );

  contract.hasMinLen(
    req.body.password,
    3,
    "A senha deve conter pelo menos 6 caracteres"
  );

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  try {
    await repository.create({
      username: req.body.username,
      password: md5(req.body.password + global.SALT_KEY),
      roles: req.body.roles,
    });

    // emailService.send(
    //   'manoel.souza280@gmail.com',
    //   'Bem vindo ao node store',
    //   global.EMAIL_TMPL.replace('{0}', req.body.name)
    // );

    res.status(201).send({
      message: "Usuário cadastrado com sucesso!",
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.authenticate = async (req, res, next) => {
  try {
    console.log("req.body.roles", req.body.roles);
    const usuario = await repository.authenticate({
      username: req.body.username,
      password: md5(req.body.password + global.SALT_KEY),
      roles: req.body.roles
    });

    console.log("usuario", usuario);
    if (!usuario) {
      res.status(404).send({
        message: "Usuário ou senha inválidos",
      });
      return;
    }

    const token = await authService.generateToken({
      id: usuario._id,
      username: usuario.username,
      roles: usuario.roles,
    });

    res.status(200).send({
      token: token,
      data: {
        id: usuario.id,
        username: usuario.username,
        roles: [req.body.roles]
      },
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    //Recupera o token
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    //Decodifica o token
    const data = await authService.decodeToken(token);

    const usuario = await repository.getById(data.id);

    if (!usuario) {
      res.status(404).send({
        message: "Usuário não encontrado",
      });
      return;
    }

    const tokenData = await authService.generateToken({
      id: usuario._id,
      name: usuario.name,
      roles: usuario.roles,
    });

    res.status(201).send({
      token: tokenData,
      data: {
        username: usuario.username,
      },
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    
    req.body.password = md5(req.body.password + global.SALT_KEY);

    await repository.put(req.params.id, req.body);
    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
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
    res.status(200).send({ message: "Usuário removido com sucesso!" });
  } catch (e) {
    console.log(e)
    res.status(400).send({
      message: "Falha ao remover usuário",
      data: e,
    });
  }
};

exports.verifyToken = async (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  
  return authService.verifyToken(res, token);

}; 
