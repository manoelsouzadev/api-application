const express = require("express");
const bodyParser = require("body-parser");
const morganBody = require('morgan-body');
const mongoose = require('mongoose');
const cors = require("cors");
const moment = require("moment");
const app = express();
const dns = require('dns');
const os = require('os');
const db = require('../config/db');
const environment = require('../config/environment');
const fs = require('fs');
const path = require('path');
const expressSwagger = require('express-swagger-generator')(app);

morganBody(app);

const log = fs.createWriteStream(
  path.join("./logs", `express${moment().format('YYYY-MM-DD')}.log`), { flags: "a" }
);

log.on('error', function (err) {
  console.log("erro");
});

morganBody(app, {
  noColors: true,
  stream: log,
});

let options = {
    swaggerDefinition: {
        info: {
            description: 'Este documentação é referente a api principal da api do aplicativo de igreja',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: "api-igreja-principal.jamb-devs.tech",
        basePath: '/',
        produces: [
            "application/json",
        ],
        schemes: ['http', 'https'],
        // securityDefinitions: {
        //     JWT: {
        //         type: 'apiKey',
        //         in: 'header',
        //         name: 'Authorization',
        //         description: "",
        //     }
        // }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/*.js'] //Path to the API handle folder
};

//carrega models
const Culto = require('./models/culto');
const Campanha = require('./models/campanha');
const Oracao = require('./models/oracao');
const Ensaio = require('./models/ensaio');
const Evento = require('./models/evento');
const Lembrete = require('./models/lembrete');
const Aniversario = require('./models/aniversario');
const Categoria = require('./models/categoria');
const Publicacao = require('./models/publicacao');
const Canal = require('./models/canal');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const cultoRoute = require('./routes/culto-route');
const campanhaRoute = require('./routes/campanha-route');
const oracaoRoute = require('./routes/oracao-route');
const ensaioRoute = require('./routes/ensaio-route');
const eventoRoute = require('./routes/evento-route');
const lembreteRoute = require('./routes/lembrete-route');
const aniversarioRoute = require('./routes/aniversario-route');
const categoriaRoute = require('./routes/categoria-route');
const publicacaoRoute = require('./routes/publicacao-route');
const CanalRoute = require('./routes/canal-route');

mongoose.connect(   
  //db.mongoURI
    process.env.MONGO_URL
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
app.use('/aniversarios', aniversarioRoute);
app.use('/categorias', categoriaRoute);
app.use('/publicacoes', publicacaoRoute);
app.use('/canais', CanalRoute);

expressSwagger(options);

module.exports = app;
