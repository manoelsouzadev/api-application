'use strict';

const jwt = require('jsonwebtoken');

exports.generateToken = async data => {
  console.log("salt", global.SALT_KEY)
  return jwt.sign(data, global.SALT_KEY, {
    expiresIn: '1d'
  });
};

exports.decodeToken = async token => {
  var data = await jwt.verify(token, global.SALT_KEY);
  return data;
};

exports.authorize = function (req, res, next) {
  var token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    res.status(401).json({
      message: 'Acesso Restrito',
      situacao: 0
    });
  } else {
    jwt.verify(token, global.SALT_KEY, function (error, decoded) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido',
          situacao: 0
        });
      } else {
        next();
      }
    });
  }
};

exports.isAdmin = function (req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401).json({
      message: 'Token Inválido',
      situacao: 0
    });
  } else {
    jwt.verify(token, global.SALT_KEY, function (error, decoded) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido',
          situacao: 0
        });
      } else {
        if (decoded.roles.includes('admin')) {
          next();
        } else {
          res.status(403).json({
            message: 'Esta funcionalidade é restrita para administradores'
          });
        }
      }
    });
  }
};

exports.verifyToken = async (res, token) => {
  console.log("token", token)
  if (token == null) {
    console.log("error token final 2", error)
    res.status(401).json({
      mensagem: 'Token Inválido',
      situacao: 0
    });
  } else {
    jwt.verify(token, global.SALT_KEY, function (error, decoded) {
      if (error) {
        console.log("error token final", error)
        res.status(401).json({
          mensagem: 'Token Inválido',
          situacao: 0
        });
      } else {
        res.status(200).json({
          mensagem: 'Token válido',
          situacao: 1
        });
      }
    });
  }
};