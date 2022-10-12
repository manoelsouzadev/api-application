"use strict";

const fs = require("fs");
const { google } = require("googleapis");
const { rawListeners } = require("process");
const readline = require("readline");
const OAuth2 = google.auth.OAuth2;
const service = google.youtube("v3");

const SCOPES = [
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube.readonly'
];

const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + "/.credenciais/";

const TOKEN_PATH = TOKEN_DIR + "upload_app_session.json";

exports.authorize = (credentials, cb) => {
  const clientSecret = credentials.web.client_secret;
  const clientId = credentials.web.client_id;
  const redirectUrl = credentials.web.redirect_uris[0];
  const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  fs.readFile(TOKEN_PATH, (error, token) => {
    if(error){
      return getNewToken(oauth2Client, cb);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      return cb(null, oauth2Client);
    }
  })
}

const getNewToken = (oauth2Client, cb) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES
  });

  console.log('Authorize this app by visiting this url: ', authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

 rl.question("Entre com o código da página aqui: ", code => {
    rl.close();
    oauth2Client.getToken(code, (error, token) => {
      if(error){
        return cb(new Error("Erro enquanto ao tentar retornar token de acesso", error));
      }

      oauth2Client.credentials = token;
      storeToken(token);
      return cb(null, oauth2Client);
    });
  });
}

const storeToken = token => {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (error) {
    if(error.code != "EEXIST"){
      throw error;
    }
    
  }

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), error => {
    if(error){
      throw error;
    }

    console.log("Token armazenado em: " + TOKEN_PATH);
  });
}

// const uploadVideo = (auth, cb, filename) => {
//   service.videos.insert({
//     auth: auth,
//     part: "snippet,contentDetails,status",
//     resource: {
//       snippet:{
//         title: "teste",
//         description: "teste"
//       },
//       status:{
//         privacyStatus: "private"
//       }
//     },
//     media: {
//       body: fs.createReadStream(`./uploads/${filename}`)
//     }
//   },
//   (error, data) => {
//     if(error){
//       return cb(error);
//     }
//     console.log('https://www.youtube.com/watch?v=' + data.data.id);
//     return cb(null, data.data.id);
//   });
// }

exports.getOAuth = async (req, res) => {
  const code = req.query.code;
  console.log("consentimento dado: ", code);
  return res.status(200);

}

exports.post = async (req, res) => {

  const files = req.files;
  console.log(files.file.path.split("/")[0])
  console.log(files.file.originalFilename)

  await fs.rename(files.file.path, `uploads\\${files.file.originalFilename}`, () => {
    console.log("Arquivo Renomeado");
  });

  const cb = (data) => {
    console.log("data: ", data);
  }

  let auth = null;

  await fs.readFile('./credenciais/client_secret.json', async (error, content, cb) => {

     if(error){
       console.log("Error ao carregar client secret", error);
       return cb(error);
     }

     auth = await  this.authorize(JSON.parse(content), (data) => console.log("Authorize data: ", data));
    // this.uploadVideo(auth, (data) => console.log("data: ", data), files.file.originalFilename);
  });

  if(auth != null){

  await service.videos.insert({
    auth: auth,
    part: "snippet,contentDetails,status",
    resource: {
      snippet:{
        title: "teste",
        description: "teste"
      },
      status:{
        privacyStatus: "private"
      }
    },
    media: {
      body: fs.createReadStream(`./uploads/${files.file.originalFilename}`)
    }
  },
  (error, data) => {

    fs.unlink(`./uploads/${files.file.originalFilename}`, err => {
      if (err) {
        throw err
      }
    
      console.log('File is deleted.')
    })

    if(error){
      console.log("error: ", error);
    }
    console.log("https://www.youtube.com/watch?v=", data);
    // console.log('https://www.youtube.com/watch?v=' + data.data.id);
    return console.log("data: ", data);
  });
}


};
