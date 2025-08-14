/* let reg  = new RegExp("^[a-z]","gi");
let reg2 = /^[a-z]/gi;
console.log(reg2 instanceof RegExp); // Imprime true */

/* let str = "I am amazed in America";
let reg = /am/g;
console.log(reg.test(str)); // Imprime true
console.log(reg.test(str)); // Imprime true
console.log(reg.test(str)); // Imprime false, hay solo dos coincidencias

let reg2 = /am/gi; // "Am" será lo que busque ahora
console.log(reg.test(str)); // Imprime true
console.log(reg.test(str)); // Imprime true
console.log(reg.test(str)); // Imprime true. Ahora tenemos 3 coincidencias con este nuevo patrón */

/* let str = "I am amazed in America";
let reg = /am/gi;
console.log(reg.exec(str)); // Imprime ["am", index: 2, input: "I am amazed in America"]
console.log(reg.exec(str)); // Imprime ["am", index: 5, input: "I am amazed in America"]
console.log(reg.exec(str)); // Imprime ["Am", index: 15, input: "I am amazed in America"]
console.log(reg.exec(str)); // Imprime null. No hay más coincidencias */

/* let str = "I am amazed in America";
let reg = /am/gi;
let match;
while(match = reg.exec(str)) {
    console.log("Patrón encontrado!: " + match[0] + ", en la posición: " + match.index);
} */
/* Esto imprimirá:
  * Patrón encontrado!: am, en la posición: 2
  * Patrón encontrado!: am, en la posición: 5
  * Patrón encontrado!: Am, en la posición: 15 */

/* let str = "I am amazed in America";
console.log(str.match(/am/gi)); // Imprime ["am", "am", "Am"] */

let str = "I am amazed in America";
console.log(str.replace(/am/gi, "xx")); // Imprime "I xx xxazed in xxerica"
console.log(str.replace(/am/gi, function(match) {
    return "-" + match.toUpperCase() + "-";
})); // Imprime "I -AM- -AM-azed in -AM-erica"