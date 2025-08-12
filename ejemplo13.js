'use strict';

function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Tom"); // "Hello Tom"

/**
 * No necesitas tener la función declarada antes de la llamada, el motor de ejecución de JavaScript hace 2 pasadas. 
 * Primero procesa las declaraciones de variables y funciones, y después ejecuta el programa.
 * Podemos llamar a una función enviándole más o menos parámetros de los establecidos en la declaración. 
 * Si le enviamos más parámetros, los sobrantes serán ignorados y si le enviamos menos, a los no recibidos se 
 * les asignará el valor undefined.
 */

sayHello(); // "Hello undefined"

/** 
 * RETORNO DE VALORES
*/

function totalPrice(priceUnit, units) {
    return priceUnit * units;
}

let total = totalPrice(5.95, 6);
console.log(total);  // 35.7

/**
 * FUNCIONES ANÓNIMAS
 */

let totalPriceAnonima = function(priceUnit, units) {
    return priceUnit * units;
}

console.log(typeof totalPriceAnonima); // "function" (tipo de datos del identificador totalPriceAnonima)
console.log(totalPriceAnonima(5.95, 6)); // 35.7
let getTotal = totalPriceAnonima; // Podemos crear varios identificadores que referencien a la misma función
console.log(getTotal(5.95, 6));  // 35.7

/**
 * FUNCIONES LAMBDA
 */

let sumaAnonima = function(num1, num2) {
    return num1 + num2;
}
console.log(sumaAnonima(12,5)); // 17
// Cuando declaramos una función flecha o lambda, la palabra reservada function no se usa. 
// Si sólo se recibe un parámetro, los paréntesis pueden ser omitidos. Después de los parámetros debe ir 
// una flecha (=>), y el contenido de la función.
let sumLambda = (num1, num2) => num1 + num2;
console.log(sumLambda(12,5)); // 17

let square = num => num * num; // Función con una sola instrucción que no devuelve nada
console.log(square(3)); // 9

let sumInterest = (price, percentage) => {
    let interest = price * percentage / 100;
    return price + interest;
}
console.log(sumInterest(200,15)); // 230

function sayHelloUser(name) {
    name = name || "Anonymous";
    console.log("Hello! I'm " + name);
}
sayHelloUser("Rosa"); // "Hello I'm Rosa"
sayHelloUser(); // "Hello I'm Anonymous"

function sayHelloDefecto(name = "Anonymous") {
    console.log("Hello! I'm " + name + " en la función con valores por defecto");
}

sayHelloDefecto(); // "Hello! I'm Anonymous"

function getTotalPrice(price, tax = price * 0.07) { // Valor por defecto calculado
    return price + tax;
}

console.log(getTotalPrice(100)); // 107



function setPerson() {
    let  person = "Peter"; // Variable local, si quito el use strict y el let pasa a global
}

setPerson();
/* console.log(person); */ // Error → Uncaught ReferenceError: person is not defined

function setPerson() {
    let persona = "Peter";
}

let persona = "John";
setPerson(); // Al haber sido declarada persona dentro de la función, no actualizará la variable global persona
console.log(persona); // Imprime John