let a = true;
console.log(typeof a); // boolean

// Como con number son objetos pero no tiene más métodos o propiedades que los heredados de object

/**
 * Importante, falso será: string vacío (""), null, undefined, NaN, y 0
 */

let v = null;
let s = "Hello";

console.log(Boolean(v)); // false
console.log(!!s); // true
console.log(!!0); // false
console.log(!!24); // true
console.log(!!NaN); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!![]); // true (array vacío)
console.log(!!{}); // true (objeto vacío)
