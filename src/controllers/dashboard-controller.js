const aniversarioController = require("../controllers/aniversario-controller");
const campanhaController = require("../controllers/campanha-controller");
const cultoController = require("../controllers/culto-controller");
const ensaioController = require("../controllers/ensaio-controller");
const eventoController = require("../controllers/evento-controller");
const lembreteController = require("../controllers/lembrete-controller");
const oracaoController = require("../controllers/oracao-controller");
const pedidoOracaoController = require("../controllers/pedido-oracao-controller");
const publicacaoController = require("../controllers/publicacao-controller");
const usuarioController = require("../controllers/usuario-controller");
const dividaEscolaBiblicaController = require("../controllers/divida-escola-biblica-controller");
const revistaEscolaBiblicaController = require("../controllers/revista-escola-biblica-controller");

exports.getCounts = async (req, res) => {
  const aniversarioCount = await aniversarioController.getCount(req, res);
  const campanhaCount = await campanhaController.getCount(req, res);
  const cultoCount = await cultoController.getCount(req, res);
  const ensaioCount = await ensaioController.getCount(req, res);
  const eventoCount = await eventoController.getCount(req, res)
  const lembreteCount = await lembreteController.getCount(req, res);
  const oracaoCount = await oracaoController.getCount(req, res);
  const pedidoOracaoCount = await pedidoOracaoController.getCount(req, res);
  const publicacaoCount = await publicacaoController.getCount(req, res);
  const usuarioCount = await usuarioController.getCount(req, res);
  const dividaCount = await dividaEscolaBiblicaController.getCount(req, res);
  const revistaCount = await revistaEscolaBiblicaController.getCount(req, res);

  let data = [{
      label: "Aniversários",
      data: aniversarioCount
    },
    {
      label: "Campanhas",
      data: campanhaCount
    },
    {
      label: "Cultos",
      data: cultoCount
    },
    {
      label: "Ensaios",
      data: ensaioCount
    },
    {
      label: "Eventos",
      data: eventoCount
    },
    {
      label: "Lembretes",
      data: lembreteCount
    },
    {
      label: "Orações",
      data: oracaoCount
    },
    {
      label: "Pedidos de Oração",
      data: pedidoOracaoCount ? pedidoOracaoCount.length : 0
    },
    {
      label: "Publicações",
      data: publicacaoCount
    },
    {
      label: "Usuários",
      data: usuarioCount
    },
    {
      label: "Dívidas EBD",
      data: dividaCount
    },
    {
      label: "Revistas EBD",
      data: revistaCount
    },
  ];

  await res.status(200).send({
    data: data
  });
};


exports.getCountUsuarios = async (req, res) => {
  const usuarioCount = await usuarioController.getCount(req, res);

  await res.status(200).send({
    label: "Usuários",
    data: usuarioCount
  });
}

exports.getCountDividasEscolaBiblica = async (req, res) => {
  const dividaCount = await dividaEscolaBiblicaController.getCount(req, res);

  await res.status(200).send({
    label: "Dívidas EBD",
    data: dividaCount
  });
}

exports.getCountRevistasEscolaBiblica = async (req, res) => {
  const revistaCount = await revistaEscolaBiblicaController.getCount(req, res);

  await res.status(200).send({
    label: "Revistas EBD",
    data: revistaCount
  });
}

exports.getValoresDevidosEscolaBiblica = async (req, res) => {

  return await revistaEscolaBiblicaController.getValoresDevidos(req, res);

}