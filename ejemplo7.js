console.log(typeof 3); // Imprime number
console.log(typeof 3.56); // Imprime number

let num = 3.2e-3; // 3.2*(10^-3)
console.log(num); // Imprime 0.0032

/**
 * Métodos o propiedades con los números en JS
 */

console.log(3.32924325.toFixed(2)); // Imprime 3.33
console.log(5435.45.toExponential()); // Imprime 5.43545e+3
console.log((3).toFixed(2)); // Imprime 3.00 

/**
 * Clase Number de JS
 */

console.log(Number.MIN_VALUE); // 5e-324 (número más pequeño)
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 (Número más grande)
console.log(Number.MAX_VALUE * 2); // Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(typeof Number.POSITIVE_INFINITY); // number

let number = Number.POSITIVE_INFINITY / 2; // Todavía Infinity!!
if(Number.isFinite(number)) {
    console.log("El número " + number + " es finito");
} else {
    console.log("El número es infinito!");
}

// Importante: No crear números usando el constructor Number()

let x = new Number(500);
let y = new Number(500);
console.log(x == y); // false!! Compara la referencia de memoria
console.log(x === y); // false

let a = 500;
console.log(x == a); // true
console.log(x === a); // false

console.log(typeof a); // number
console.log(typeof x); // object

// Sin embargo, ambos tienen las mismas propiedades y métodos
console.log(a.__proto__) // Number {...}
console.log(x.__proto__) // Number {...}


/**
 * Conversión a tipo number
 */

let s1 = "32";
let s2 = "14";

console.log(s1 + s2); // 3214 (concatena cadenas)
console.log(Number(s1) + Number(s2)); // 46
console.log(+s1 + +s2); // 46

console.log(+true); // true equivale a 1
console.log(+false); // false equivale a 0

/**
 * Not a Number (NaN)
 */

let nombre = "Juan";
let numero = +nombre;
console.log(numero); // NaN
console.log(Number.isNaN(numero)); // true
console.log(numero + 23); // NaN (no se puede operar)

