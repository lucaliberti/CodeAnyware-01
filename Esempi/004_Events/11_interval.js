

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var count = 0;
var timeout;



function myCallBack(msg) {
  console.log("myCallBack:", msg, count++);  
  if (count >100) clearInterval(timeout);
}

// setInterval(callback, delay[, ...args]) 
// Returns: <Timeout>
// https://nodejs.org/api/timers.html#timers_setinterval_callback_delay_args
timeout=setInterval( myCallBack , 1000 , "Hello");

// -------------------
// output
// -------------------

/*

# node 11_interval.js
  myCallBack: Hello 0
  myCallBack: Hello 1
  myCallBack: Hello 2
  myCallBack: Hello 3





*/
