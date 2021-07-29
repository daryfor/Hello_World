/**
 * Ejercicio 2. Promise-it-wont-hurt command. 
 */

 'use strict';
    
 var promise = new Promise(function (fulfill, reject) {
   setTimeout(() => {
       fulfill('FULFILLED!');
   }, 300);
 });
 
promise.then(console.log);