'use strict';
let v1 = "Hola Mundo!";
console.log(typeof v1); // Imprime -> string

v1 = 123;
console.log(typeof v1); // Imprime -> number

v1 = true;
console.log(typeof v1); // Imprime -> boolean

let v2;
console.log(typeof v2); // Imprime -> undefined, OJO! Undefine no es null

v3 = "Variable global";
console.log(typeof v3); // ejemplo5.js:14 Uncaught ReferenceError: v3 is not defined