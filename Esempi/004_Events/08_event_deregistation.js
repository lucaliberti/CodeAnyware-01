

/*
 * Eventi
 * deregistrazione di un listener
 *
 * */

  var EVENTEMITTER = require('events').EventEmitter;
  var emitter = new EVENTEMITTER();


//---------------------------------------
  function funzione1 (msg) {
    console.log('funzione1', msg);
  }

  function funzione2 (msg) {
    console.log('funzione2', msg);
  }


//---------------------------------------
  // all'evento tick1 associo due funzioni f_conta1 f_conta2
  // all'evento tick2 associo una funzione f_conta2
  emitter.on('tick1', funzione1);
  emitter.on('tick2', funzione2);

  console.log("Gli eventi registrati sono i seguenti ", emitter.eventNames());
  console.log("Deregistro funzione1 registrata su tick1");
  emitter.removeListener('tick1', funzione1);
  console.log("Gli eventi registrati sono i seguenti ", emitter.eventNames());

//-------------------
// output
//-------------------

/*

# node 08_event_deregistation.js
  Gli eventi registrati sono i seguenti  [ 'tick1', 'tick2' ]
  Deregistro funzione1 registrata su tick1
  Gli eventi registrati sono i seguenti  [ 'tick2' ]
  funzione2 evento tick2

*/


