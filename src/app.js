const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const db = require('../config/db');
const culto = require('./models/culto');
const campanha = require('./models/campanha');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const cultoRouter = require('./routes/culto-route');
const campanhaRouter = require('./routes/campanha-route');

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
app.use('/cultos', cultoRouter);
app.use('/campanhas', campanhaRouter);

module.exports = app;
