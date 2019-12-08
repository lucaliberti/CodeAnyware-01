



/*
 * Esempio di Web server
 *
 * File: 02_websvr_http_hello_v01.js
 *
 * Docs: 
 *
 * */



//---------------------
// VARs
//---------------------


  var http = require('http');
  var port = 8080;
  var host="10.10.5.100";

  // https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
  // http.createServer([options][, requestListener])
  var server = http.createServer ();  // returns http.Server

  // <http.Server> deriva da <net.Server> 
  //  - Event: 'checkContinue'
  //  - Event: 'checkExpectation'
  //  - Event: 'clientError'
  //  - Event: 'close'
  //  - Event: 'connect'             Emitted each time a client requests an HTTP CONNECT method
  //  - Event: 'connection'          emitted when a new TCP stream is established.
  //  - Event: 'request'             Emitted each time there is a request
  //  - Event: 'upgrade'             a client requests an HTTP upgrade.
  //                                 https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism
  // 
  // <net.Server> deriva da <EventEmitter>
  //     - Event: 'close'
  //     - Event: 'connection'       Emitted when a new connection is made. (argomenti <socket> 
  //     - Event: 'error'
  //     - Event: 'listening'        Emitted when the server has been bound after calling server.listen().


//---------------------
// FUNCs
//---------------------


//---------------------
// MAIN
//---------------------

  // https://nodejs.org/api/net.html#net_server_listen
  // server.listen (port);
  server.listen (port,host);

  // When the server starts listening, the 'listening' event will be emitted.
  server.once ('listening',
              function () {
                let t=new Date().toLocaleString();
                console.log (t,'Hello World server listening at',host,'on port',port);
                // un modo alternativo per ricavare porta indirizzo del server
                // console.log(server.address().address);
                // console.log(server.address().port);
              }
  );


  server.on ('request',
            function (req, res) {
              let t=new Date().toLocaleString();

              console.log(t,"Got Request: method="+req.method,"url="+req.url);
              //console.log(req.url);

              res.writeHead (200, { 'content-type':  'text/plain'});
              res.write ('Hello World!\n');
              res.end ();
            }
  );


  server.on("connection", function(socket) {
    let t=new Date().toLocaleString();

    let laddr=socket.localAddress;
    let lport=socket.localPort;
    let raddr=socket.remoteAddress;
    let rport=socket.remotePort;
    console.log(t , "New client connection accepted: " + 
                     raddr+":"+rport+" --> "+laddr+":"+lport);
                        

    // Emitted once the socket is fully closed
    socket.once("close", function() { 
                         let raddr=socket.remoteAddress;
                         let rport=socket.remotePort;
                         console.log(new Date().toLocaleString() , "Client "+ raddr+":"+rport+" left")
                       });

  })






