/**
 * Estructura if
 */
let price = 65;

if(price < 50) {
    console.log("This is cheap!");
} else if (price < 100) {
    console.log("Not so cheap...");
} else {
    console.log("Too expensive!");
}

/**
 * Operador ternario
 */

const socio = true;
const cuota = socio ? 50 : 100;
console.log(`Vas a pagar ${cuota}€`); // Vas a pagar 50€

/**
 * Estructura switch: Se necesita poner el break
 */

let userType = 1;

switch(userType) {
    case 1:
    case 2: // Tipos 1 y 2 entran aquí
        console.log("You can enter");
        break;
    case 3:
        console.log("You don't have enough permissions");
        break;
    default: // Ninguno de los anteriores
        console.error("Unknown user type!");
}

/**
 * Bucle While
 */

let value = 1;

while (value <= 5) { // prints 1 2 3 4 5
    console.log(value++);
}

/**
 * Bucle for
 */

let limit = 5;

for (let i = 1, j = limit; i <= limit && j > 0; i++, j--) {
    console.log(i + " - " + j);
}
/* Prints
1 - 5
2 - 4
3 - 3
4 - 2
5 - 1
*/


/**
 * Break y continue:
 * Dentro de un bucle, podemos usar las instrucciones de break y continue. La primera de ellas saldrá del 
 * bucle de forma inmediata tras ejecutarse, y la segunda, irá a la siguiente iteración saltándose el resto 
 * de instrucciones de la iteración actual (ejecuta el correspondiente incremento si estamos dentro de un bucle for).
 */

