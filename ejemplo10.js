let a;
console.log(a); // undefined

let array = [1,2,3];
console.log(array[6]); // undefined

function f(nombre) {
    console.log(`Hola ${nombre}`);
}

f("Juan"); // Hola Juan
f(); // Hola undefined

console.log("Probamos existeNombre");
function existeNombre(nombre) {
    if(nombre === undefined) {
        console.error("No has introducido un nombre!");
    } else {
        console.log(`Hola ${nombre}`);
    }
}

existeNombre("Juan"); // Hola Juan
existeNombre(); // // ERROR: No has introducido un nombre!

/**
 * undefined vs null
 * Es importante no confundir undefined con null. El segundo es un valor que se debe asignar a propósito 
 * y hace referencia a un valor de tipo objeto pero que en este momento no apunta a ninguna posición de 
 * memoria. Son parecidos, pero no es lo mismo. 
 */

let var1; // undefined
let var2 = null;

console.log(var1 == var2); // true (son equivalentes)
console.log(var1 === var2); // false (diferente tipo de datos)