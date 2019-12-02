

/*
 * Eventi
 * posso sapere quale eventi sono stati registrati
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
  // registrazione dei listener
  emitter.on('tick1', funzione1);
  emitter.on('tick1', funzione2);
  emitter.on('tick2', funzione2);


  // emitter.eventNames()
  // Returns an array listing the events for which the emitter has registered listeners. 
  // The values in the array will be strings or Symbols.
  // https://nodejs.org/api/events.html#events_emitter_eventnames

  // --- modo1 ---
  console.log("------------");
  console.log("Gli eventi registrati sono i seguenti ", emitter.eventNames());

  console.log("  vi sono " + emitter.listenerCount("tick1") + " listener(s) in attesa di tick1 ");
  console.log("  vi sono " + emitter.listenerCount("tick2") + " listener(s) in attesa di tick2 ");

  console.log("Attualmente vi sono i seguenti listener(s) in attesa di tick1 ");
  console.log(emitter.listeners("tick1"));  // emitter.listeners() Returns: <Function[]>


  // --- modo2 ---
  console.log("------------");
  var aEvents=emitter.eventNames();  // Returns: <Array>
  var iterator = aEvents.keys();
  console.log("Gli eventi registrati sono i seguenti ");
  for (let key of iterator) {
    console.log("  evento numero "+ key + 
                ", nome \"" + aEvents[key] + 
                "\", per questo evento vi sono " + 
                emitter.listenerCount( aEvents[key] ) + 
                " listener(s) in attesa" );
  }

// -------------------
// OUTPUT
// -------------------

/*

# node 07_event_management.js
------------
Gli eventi registrati sono i seguenti  [ 'tick1', 'tick2' ]
  vi sono 2 listener(s) in attesa di tick1
  vi sono 1 listener(s) in attesa di tick2
Attualmente vi sono i seguenti listener(s) in attesa di tick1
[ [Function: funzione1], [Function: funzione2] ]
------------
Gli eventi registrati sono i seguenti
  evento numero 0, nome "tick1", per questo evento vi sono 2 listener(s) in attesa
  evento numero 1, nome "tick2", per questo evento vi sono 1 listener(s) in attesa




*/




