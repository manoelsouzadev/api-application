const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const db = require('../config/db');

//carrega models
const Culto = require('./models/Culto');
const campanha = require('./models/campanha');
const oracao = require('./models/oracao');
const ensaio = require('./models/ensaio');
const evento = require('./models/evento');
const lembrete = require('./models/lembrete');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const cultoRoute = require('./routes/culto-route');
const campanhaRoute = require('./routes/campanha-route');
const oracaoRoute = require('./routes/oracao-route');
const ensaioRoute = require('./routes/ensaio-route');
const eventoRoute = require('./routes/evento-route');
const lembreteRoute = require('./routes/lembrete-route');

mongoose.connect(   
  db.mongoURI
  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use('/', indexRoute);
app.use('/cultos', cultoRoute);
app.use('/campanhas', campanhaRoute);
app.use('/oracoes', oracaoRoute);
app.use('/ensaios', ensaioRoute);
app.use('/eventos', eventoRoute);
app.use('/lembretes', lembreteRoute);

module.exports = app;
