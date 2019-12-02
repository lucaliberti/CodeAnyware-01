
/*
 * Eventi
 * esempio: più listener registrati su un determinato evento
 *
 * */

//---------------------------------------
  var EVENTEMITTER=require('events').EventEmitter;
  var emitter = new EVENTEMITTER();
  var count=0;
  
  
//---------------------------------------
  function conta1 () {
    count++;
    console.log("conta1(): gestisco l'evento 'tick1: count="+ count);
  }
  
  function conta2 () {
    count++;
    console.log("conta2(): anche io gestisco l'evento 'tick1: count="+ count);
  }
  
//---------------------------------------
  // all'evento tick1 associo f_conta1
  // Synchronously calls each of the listeners registered for the event named eventName, 
  // in the order 
  // Returns true if the event had listeners, false otherwise.
  // they were registered, passing the supplied arguments to each.
  // https://nodejs.org/api/events.html#events_emitter_emit_eventname_args
  emitter.on('tick1', conta1);
  emitter.on('tick1', conta2);
  
  // genero gli eventi
  // Adds the listener function to the end of the listeners array for the event named eventName.
  // No checks are made to see if the listener has already been added. Multiple calls passing the same
  // combination of eventName and listener will result in the listener being added, and called, multiple times.
  // https://nodejs.org/api/events.html#events_emitter_on_eventname_listener

  // emetto l'evento "tick1"
  emitter.emit('tick1');


//---------------------------------------
//---------------------------------------
/*

# node 02_event_multiple.js
conta1(): gestisco l'evento 'tick1: count=1
conta2(): anche io gestisco l'evento 'tick1: count=2
*/


