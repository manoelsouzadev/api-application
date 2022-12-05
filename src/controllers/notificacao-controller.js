'use strict';

const mongoose = require('mongoose');
const Notificacao = mongoose.model('Notificacao');
const axios = require('axios').default;
const config = require("../../config/config");

const https = require('https')

exports.post = (req, res, next) => {
  var notificacao = new Notificacao(req.body);
  notificacao
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Notificação cadastrada com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar a notificação',
        data: e
      });
    });
};

exports.get = (req, res, next) => {
  Notificacao.find().sort({
      data: 'desc'
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Notificacao.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  Notificacao.findByIdAndUpdate(req.params.id, {
      $set: {
        notificacao: req.body.notificacao,
      }
    })
    .then(x => {
      res.status(200).send({
        message: 'Notificação atualizada com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao atualizar a notificação',
        data: e
      });
    });
};

exports.delete = (req, res, next) => {
  Notificacao.findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({
        message: 'Notificação removida com sucesso!'
      });
    })
    .catch(e => {
      res.status(400).send({
        message: 'Falha ao remover notificação',
        data: e
      });
    });
};

exports.getNovasNotificacoes = async (req, res) => {
  await Notificacao.find({
      data: {
        $gte: new Date().toLocaleDateString()
      }
    }).then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.pushNotification = (request, response) => {

  // const resp = axios.post(
  //   `https://onesignal.com/api/v1/notifications`,
  //   req.body, {
  //     headers: {
  //       'Authorization': config.API_KEY_ONE_SIGNAL,
  //       'Access-Control-Allow-Origin': "*"
  //     }
  //   }
  // ).then(data => {
    
  //   res.status(200).send(data);
  // }).catch(e => {

  //   res.status(400).send(e);
  // });



const data = JSON.stringify(request.body)

const options = {
  protocol: 'https:',
  hostname: 'onesignal.com',
  port: 443,
  path: '/api/v1/notifications',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    //'Content-Length': data.length,
    'Authorization': config.API_KEY_ONE_SIGNAL,
    'Access-Control-Allow-Origin': "*"
  }
}

const resp = https
  .request(options, res => {
    let data = ''
    //console.log(res.statusCode)

    
    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', () => {
      console.log(JSON.parse(data))
    })

    response.status(res.statusCode).send({ message: `${res.statusCode == 200 ? "Notificação enviada com sucesso!" : "Erro ao enviar notificação"}`})
  })
  .on('error', err => {
    console.log('Error: ', err.message)
  })

resp.write(data)
resp.end();

};