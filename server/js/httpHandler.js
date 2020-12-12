const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  const validMessages = ['left', 'right', 'up', 'down'];
  const messageLength = validMessages.length;
  // random generator for inputs
  let randomIndex = (max) => { return Math.floor(Math.random() * max)}
  let randomInput = validMessages[randomIndex(messageLength)];
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // If request type is an OPTIONS request
  if (req.method === "OPTIONS") {
    // Write the response code and headers
    res.writeHead(200, headers);
    // Call the end method with no arguments
    res.end();
    // Call the next calback
    next(); // invoke next() at the end of a request to help with testing!
  }

  if (req.method === "GET") {
    // if url === /
    if (req.url === '/') {
      // write the response code and headers
      res.writeHead(200, headers);
      // response end method (`randominput`)
      res.end(randomInput);
    }
  }
};
