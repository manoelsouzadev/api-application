'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  idPlaylist: {
    type: String,
    required: true,
    trim: true
  },
  nome: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Playlist', schema);