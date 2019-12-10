

/*
 *  Esempio:  simple http server

 *
 * File:   03_express.js
 * Run:    node 02_express.js
 *
 * Docs: capitolo 4 del libro di testo
 *
 * */



//---------------------
// VARs
//---------------------


  var http = require("http");
  var express = require("express");
  var path= require("path");
  var fs=require("fs");

  var app=express();
  var port=8080;

//---------------------
// FUNCs Middleware
//---------------------


  function fcb_log (request, response, next) {
     var timestamp=new Date();
     console.log(get_timestamp() , "New request: " + request.url + " from ip "); //FIXME
     next();
  }

  function fcb_response (request, response, next) {


    if ( request.url == "/" ) {
      request.url="/index.html";
    }

    var filePath = path.join(__dirname, "static", request.url);
    fs.stat(filePath, function(err, fileInfo) {
        if (err) {
          next();
          return;
        }
      if (fileInfo.isFile()) {
          response.sendFile(filePath);
          console.log(get_timestamp() + " Sent "+ filePath); //FIXME
        } else {
          next();
        }
    });
  }


  function fcb_handle_error (request, response) {
    response.status(404);
    response.send("File not found!");
    console.log(get_timestamp() +  " " + request.url + " not found on this server"); 
  }

//---------------------
// FUNCs Middleware
//---------------------
  function get_timestamp () {
    var now = new Date();
    return now;
  }

//---------------------
// MAIN
//---------------------


  app.use(fcb_log);
  app.use(fcb_response);
  app.use(fcb_handle_error);

  // start del server
  var httpsvr=http.createServer(app); // Returns: <http.Server> 	
  httpsvr.listen(port, function() { console.log("Express app started on port", port); } );
  // modo alternativo 
  // http.createServer(app).listen(port);
  // altri modi alternativo 
  // app.listen(port) 
  // app.listen(port,f_cb) 







 


