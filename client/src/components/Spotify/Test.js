import axios from "axios";
import React from "react";

function Test() {

    var client_id = '017a12b1f67741a48d49f1860b9d32fd'; // Your client id
var client_secret = '0b468a31a00f4ac3993afee311172a6e'; // Your secret
var redirect_uri = 'http://localhost:3000/'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

//var app = express();

// app.use(express.static(__dirname + '/public'))
//    .use(cors())
//    .use(cookieParser());

//app.get('/login', function(req, res) {

const step1 = () => {
    const authEndpoint = "https://accounts.spotify.com/authorize";

    var clientId = '017a12b1f67741a48d49f1860b9d32fd'; // Your client id
    var clientSecret = '0b468a31a00f4ac3993afee311172a6e'; // Your secret
    var redirectUri = 'http://localhost:3000/'; // Your redirect uri

//   var state = generateRandomString(16);
//   res.cookie(stateKey, state);

  // your application requests authorization
  const scopes = 'user-read-private user-read-email';
  console.log("step1")
  axios.get('https://accounts.spotify.com/authorize?response_type=code&client_id=4d986b54e81e4b81a5b38ede0df25e07&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2Fcallback&state=hqlFJw8NvIXL369N')
  .then(res => console.log(res))
      
    
    
    // 'https://accounts.spotify.com/authorize?' +
    // querystring.stringify({
    //   response_type: 'code',
    //   client_id: client_id,
    //   scope: scope,
    //   redirect_uri: redirect_uri,
      //state: state
    //));
};

step1();

// app.get('/callback', function(req, res) {

//   // your application requests refresh and access tokens
//   // after checking the state parameter

//   var code = req.query.code || null;
//   var state = req.query.state || null;
//   var storedState = req.cookies ? req.cookies[stateKey] : null;

//   if (state === null || state !== storedState) {
//     res.redirect('/#' +
//       querystring.stringify({
//         error: 'state_mismatch'
//       }));
//   } else {
//     res.clearCookie(stateKey);
//     var authOptions = {
//       url: 'https://accounts.spotify.com/api/token',
//       form: {
//         code: code,
//         redirect_uri: redirect_uri,
//         grant_type: 'authorization_code'
//       },
//       headers: {
//         'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//       },
//       json: true
//     };

//     request.post(authOptions, function(error, response, body) {
//       if (!error && response.statusCode === 200) {

//         var access_token = body.access_token,
//             refresh_token = body.refresh_token;

//         var options = {
//           url: 'https://api.spotify.com/v1/me',
//           headers: { 'Authorization': 'Bearer ' + access_token },
//           json: true
//         };

//         // use the access token to access the Spotify Web API
//         request.get(options, function(error, response, body) {
//           console.log(body);
//         });

//         // we can also pass the token to the browser to make requests from there
//         res.redirect('/#' +
//           querystring.stringify({
//             access_token: access_token,
//             refresh_token: refresh_token
//           }));
//       } else {
//         res.redirect('/#' +
//           querystring.stringify({
//             error: 'invalid_token'
//           }));
//       }
//     });
//   }
// });

// app.get('/refresh_token', function(req, res) {

//   // requesting access token from refresh token
//   var refresh_token = req.query.refresh_token;
//   var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
//     form: {
//       grant_type: 'refresh_token',
//       refresh_token: refresh_token
//     },
//     json: true
//   };

//   request.post(authOptions, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var access_token = body.access_token;
//       res.send({
//         'access_token': access_token
//       });
//     }
//   });
// });


    return (
        <>
            <h1>hello</h1>
    </>
    )
}

export default Test;