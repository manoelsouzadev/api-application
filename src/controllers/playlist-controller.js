"use strict";

const mongoose = require("mongoose");
const Playlist = mongoose.model("Playlist");

exports.post = (req, res, next) => {
  var playlist = new Playlist(req.body);
  playlist
    .save()
    .then(() => {
      res.status(201).send({
        message: "Playlist cadastrada com sucesso!",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao cadastrar a Playlist",
        data: e,
      });
    });
};

exports.get = (req, res, next) => {
  Playlist.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Playlist.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  Playlist.findByIdAndUpdate(req.params.id, {
    $set: {
      idPlaylist: req.body.idPlaylist,
      nome: req.body.nome
    },
  })
    .then((x) => {
      res.status(200).send({ message: "Playlist atualizada com sucesso!" });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao atualizar a playlist",
        data: e,
      });
    });
};

exports.delete = (req, res, next) => {
  Playlist.findByIdAndRemove(req.params.id)
    .then((x) => {
      res.status(200).send({ message: "Playlist removida com sucesso!" });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao remover playlist",
        data: e,
      });
    });
};
