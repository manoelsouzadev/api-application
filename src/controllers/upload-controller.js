var fs = require('fs');
var readline = require('readline');
var {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;
const service = google.youtube("v3");

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/youtube-nodejs-quickstart.json
const SCOPES = [
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube.readonly'
];

var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credenciais/';
var TOKEN_PATH = TOKEN_DIR + 'upload_app_session.json';

exports.autorizar = async (req, res) => {
  fs.readFile('./credenciais/client_secret.json', function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the YouTube API.
    //authorize(JSON.parse(content), getChannel);
    const auth = montarOAuth(JSON.parse(content));
    

  //  fs.unlink(`uploads\\${files.file.originalFilename}`, err => {
  //   if (err) {
  //     throw err
  //   }
  
  //   console.log('File is deleted.')
  var authUrl = auth.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });

  res.json(authUrl);

  // });
  });
};

function montarOAuth(credentials) {
  var clientSecret = credentials.web.client_secret;
  var clientId = credentials.web.client_id;
  var redirectUrl = credentials.web.redirect_uris[0];
  var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
  return oauth2Client;
}

exports.upload = async (req, res) => {

  const files = req.files;

  await fs.rename(files.file.path, `uploads\\${files.file.originalFilename}`, () => {
    console.log("Arquivo Renomeado");
  });

  fs.readFile('./credenciais/client_secret.json', function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the YouTube API.
    //authorize(JSON.parse(content), getChannel);
  authorize(JSON.parse(content), uploadVideo);

  //  fs.unlink(`uploads\\${files.file.originalFilename}`, err => {
  //   if (err) {
  //     throw err
  //   }
  
  //   console.log('File is deleted.')
  // });
  });
}


  




// Load client secrets from a local file.


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.web.client_secret;
  var clientId = credentials.web.client_id;
  var redirectUrl = credentials.web.redirect_uris[0];
  var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    console.log(TOKEN_PATH)
  //  if (err) {
      getNewToken(oauth2Client, callback);
    //} else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    //}
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) throw err;
    console.log('Token stored to ' + TOKEN_PATH);
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function getChannel(auth) {
  var service = google.youtube('v3');
  service.channels.list({
    auth: auth,
    part: 'snippet,contentDetails,statistics',
    forUsername: 'GoogleDevelopers'
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var channels = response.data.items;
    if (channels.length == 0) {
      console.log('No channel found.');
    } else {
      console.log('This channel\'s ID is %s. Its title is \'%s\', and ' +
                  'it has %s views.',
                  channels[0].id,
                  channels[0].snippet.title,
                  channels[0].statistics.viewCount);
    }
  });
}


const uploadVideo = (auth, cb) => {
  service.videos.insert(
      {
          auth: auth,
          part: 'snippet,contentDetails,status',
          resource: {
              // Video title and description
              snippet: {
                  title: 'My title',
                  description: 'My description'
              },
              // I set to private for tests
              status: {
                  privacyStatus: 'private'
              }
          },

          // Create the readable stream to upload the video
          media: {
              body: fs.createReadStream('./uploads/video-teste.mp4') // Change here to your real video
          }
      },
      (error, data) => {
          if (error) {
             console.log(error);
          }
          console.log('https://www.youtube.com/watch?v=' + data);
          return console.log(data);
      }
  );
};

exports.getOAuth = async (req, res) => {
  // const code = req.query.code;
  // console.log("consentimento dado: ", code);
  // return res.status(200).send(code)

  const code = req.query.code;

  fs.readFile('./credenciais/client_secret.json', function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the YouTube API.
    //authorize(JSON.parse(content), getChannel);
    const auth = montarOAuth(JSON.parse(content));
    
    auth.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      // auth.credentials = token;
      storeToken(token);
      //callback(oauth2Client);
    });

  });
   
    console.log("consentimento dado: ", code);

}