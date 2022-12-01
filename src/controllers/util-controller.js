const {
    Readable
} = require("stream");
const readLine = require("readline");
const mongoose = require('mongoose');
const Publicacao = mongoose.model('Publicacao');

exports.procesarCsv = async (req, res) => {

    const {
        file
    } = req;
    const buffer = file.buffer;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const publicacoesLine = readLine.createInterface({
        input: readableFile
    });

    const publicacoes = [];

    for await (let line of publicacoesLine) {
        const publicacaoLineSplit = line.split(",");

        publicacoes.push({
            titulo: publicacaoLineSplit[0],
            slug: publicacaoLineSplit[1],
            descricao: publicacaoLineSplit[2],
            texto: publicacaoLineSplit[3],
            textoSemFormatacao: publicacaoLineSplit[4],
            urlVideo: publicacaoLineSplit[5],
            categoriaVideo:  publicacaoLineSplit[6]
        });

    }
    
    for  (let i = 0; i < publicacoes.length; i++ ) {

        var publicacao = new Publicacao(publicacoes[i]);

        await publicacao
            .save()
            .then(() => {
                res.status(201).send({
                    message: 'Publicação cadastrada com sucesso!'
                });
            })
            .catch(e => {
                res.status(400).send({
                    message: 'Falha ao cadastrar a publicação',
                    data: e
                });
            });
    }

    return res.json(publicacoes);
}