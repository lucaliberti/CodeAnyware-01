



/*
 * Esempio di Web server
 *
 * File: 01_websvr_http_hello_v01.js
 *
 * Docs: 
 *
 * */



//---------------------
// VARs
//---------------------


  var http = require('http');
  var port = 8080;

  var server = http.createServer ();  // returns http.Server


//---------------------
// MAIN
//---------------------

  server.listen (port);

  // When the server starts listening, the 'listening' event will be emitted.
  server.once ('listening',
              function () {
                console.log ('Hello World server listening at on port',port);
              }
  );


  server.on ('request',
            function (req, res) {
              console.log("Got Request");

              res.writeHead (200, { 'content-type':  'text/plain'});
              res.write ('Hello World!\n');
              res.end ();
            }
  );




