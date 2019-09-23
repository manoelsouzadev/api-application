const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const culto = require('./models/culto');
//Carrega as rotas
const indexRoute = require('./routes/index-route');
const cultoRouter = require('./routes/culto-route');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(corsOptions);

mongoose.connect(   
    'mongodb+srv://manoel:mongodbnosql@mongodb-akelj.mongodb.net/test?retryWrites=true&w=majority'
  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use('/cultos', cultoRouter);

module.exports = app;
