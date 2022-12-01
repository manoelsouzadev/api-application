'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	nome:{
		type: String, 
		required: true
	}, 
	slug:{
		type: String, 
		required: true
	},
	date:{
		type: Date,
		default: Date.now()
	}
})

mongoose.model('Categoria', schema);