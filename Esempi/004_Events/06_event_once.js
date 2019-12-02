

/*
 * Eventi
 * posso registrare una funzione per un solo evento
 *
 * */

  var EVENTEMITTER = require('events').EventEmitter;
  var emitter = new EVENTEMITTER();


//---------------------------------------
  function funzione1 (msg) {
    console.log('funzione1() invocata');
  }

  function funzione2 (msg) {
    console.log('funzione2() invocata');
  }


//---------------------------------------
  // all'evento tick1 associo due funzioni f_conta1 f_conta2
  // all'evento tick2 associo una funzione f_conta2
  emitter.once('tick1', funzione1);
  emitter.on('tick1', funzione2);


  emitter.emit('tick1'); // viene richiamata funzione1() funzione2()
                         // funzione1() viene deregistrato
  emitter.emit('tick1'); // viene richiamata funzione2()


// ---------------
// output
// ---------------
/*

# node 06_event_once.js
  funzione1() invocata
  funzione2() invocata
  funzione2() invocata

*/

