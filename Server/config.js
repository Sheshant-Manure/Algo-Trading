const { FivePaisaClient } = require("5paisajs");
require('dotenv').config();

// Configuration for your app
const conf = {
    appSource: process.env.APPSOURCE,
    appName: process.env.APPNAME,
    userId: process.env.USERID,
    password: process.env.PASSWORD,
    userKey: process.env.KEY,
    encryptionKey: process.env.ENCRYPTIONKEY,
  };
  
  var client = new FivePaisaClient(conf);
  
  // This client object can be used to login multiple users.
  client
   .get_TOTP_Session("53029057", "762792", "879091")
   .then(response => {
       const requestToken = response.requestToken;  // Assuming request token is in the response
       return client.getAccessToken(requestToken);
    })
    .then(response => {
       // Login successful, access token is in response
       console.log(`Login Successful! Access Token : ${response.accessToken}`);
       // Proceed with other API calls using the client
    })
    .catch(err => {
       console.log(err);
    });


module.exports = {
    port: 8080,
    client,
}