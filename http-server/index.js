/**
 * Minimal HTTP Server written for Node.js
 * Author: Amit Gupta
 */

// Dependencies
//const http = require('http');
//const url = require('url');
//const fs = require('fs');
//const path = require('path');

import http from 'http';
import url from 'url';
import fs from 'fs';
import path from 'path';


// Container Object
const server = {};

// Base Directory - Assuming minimal-http-server will be accessed from its own folder.
var  baseDir = path.join(path.resolve('.'), '../');

// Mime Types
const mimeTypes = {
  '.html': 'text/html',
  '.jgp': 'image/jpeg',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

// Create a server
const httpServer = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);

  // Remove leading and trailing / and \ from url path
  let pathName = parsedUrl.pathname;

  // Get the file extension
  const extensionName = path.extname(pathName);

  // Check path and set the default to index.html
  pathName = extensionName === undefined || extensionName === '' ? `${pathName}/index.html` : pathName;

  // Get the contentType based on the file extension
  const responseContentType = getContentType(pathName);

  // Set the 'Content-Type' in response header
  response.setHeader('Content-Type', responseContentType);

  // Read the file and send the response
  fs.readFile(`${baseDir}${pathName}`, (error, data) => {
    if (!error) {
      response.writeHead(200);
      response.end(data);
    } else {
      console.log(error);
      response.writeHead(404);
      response.end('404 - File Not Found');
    }
  });
});

// Get the content type for a given path
const getContentType = pathName => {
  // Set the default content type
  let contentType = 'application/octet-stream';

  // Set the contentType based on mime type
  for (var key in mimeTypes) {
    if (mimeTypes.hasOwnProperty(key)) {
      if (pathName.indexOf(key) > -1) {
        contentType = mimeTypes[key];
      }
    }
  }
  return contentType;
};

// Main method to be called to start the server. 'port' defaults to 3000 and 'host' defaults to 127.0.0.1
server.init = (serverBaseDir=null, port = 3000, host = '127.0.0.1') => {
  if (serverBaseDir !== null) {
    baseDir = serverBaseDir;
  }
  httpServer.listen(port, () => {
    console.log(`\x1b[32m%s\x1b[0m`, `Server is running at http://${host}:${port}`);
  });
};

export default server;
