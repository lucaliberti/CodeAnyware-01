
/*
 *  Eventi
 *  Esempio di utilizzo dei parametri
 *
 * */

//---------------------------------------
  var EVENTEMITTER=require('events').EventEmitter;
  var emitter = new EVENTEMITTER();
  var i=0;
  var j=10;
  
  
//---------------------------------------
  function f_incrementa (count) {
    console.log('tick1: incremento', count++ , " di una unità ed ottengo" , count);
  }
  
  function f_somma (param1 , param2 ) {
    console.log('tick2: somma='+  param1 + param2  );
    console.log('tick2: non proprio la somma corretta è ...');
    console.log('tick2: somma='+ (param1 + param2) );
  }
  
  
//---------------------------------------
  // all'evento tick1 associo f_conta1
  // all'evento tick2 associo f_conta2
  emitter.on('tick1', f_incrementa);
  emitter.on('tick2', f_somma);
  
  // genero gli eventi
  emitter.emit('tick1', i);
  emitter.emit('tick2', 3, 4 );


//---------------------------------------
// OUTPUT
//---------------------------------------
/*

# node 04_event_parameters.js
  tick1: incremento 0  di una unità ed ottengo 1
  tick2: somma=34
  tick2: non proprio la somma corretta è ...
  tick2: somma=7

*/
  

