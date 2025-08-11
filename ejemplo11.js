console.log(4 + 6); // 10
console.log("Hello " + "world!"); // "Hello world!"
console.log("23" + 12); // "2312"
console.log("42" + true); // "42true"
console.log("42" + undefined); // "42undefined"
console.log("42" + null); // "42null"
console.log(42 + "hello"); // "42hello"
console.log(42 + true); // 43 (true => 1)
console.log(42 + false); // 42 (false => 0)
console.log(42 + undefined); // NaN (undefined no se puede convertir a número)
console.log(42 + null); // 42 (null => 0)
console.log(13 + 10 + "12"); // "2312" (13 + 10 = 23, 23 + "12" = "2312")

/**
 * Operadodres aritméticos:
 */

console.log(4 * 6); // 24
console.log(4 ** 2); // 16
console.log("Hello " * "world!"); // NaN
console.log("24" / 12); // 2 (24 / 12)
console.log("42" * true); // 42 (42 * 1)
console.log("42" * false); // 0 (42 * 0)
console.log("42" * undefined); // NaN
console.log("42" - null); // 42 (42 - 0)
console.log(12 * "hello"); // NaN ("hello" no se puede convertir a number)
console.log(13 * 10 - "12"); // 118 ((13 * 10) - 12)

/**
 * Operadores unarios
 */

let a = 1;
let b = 5;
console.log(a++); // Imprime 1 e incrementa a = 2
console.log(++a); // Incrementa a = 3, e imprime 3
console.log(++a + ++b); // Incrementa a = 4 y b = 6. Suma (4+6), e imprime 10
console.log(a-- + --b); // Decrementa b = 5. Suma (4+5). Imprime 9. Decrementa a = 3

/** 
 * Operadores relacionales
 */
console.log(3 == "3"); // true
console.log(3 === "3"); // false
console.log(3 != "3"); // false
console.log(3 !== "3"); // true

console.log("" == false); // true
console.log(false == null); // false (null no equivale a ningún booleano).
console.log(false == undefined); // false (undefined no equivale a ningún booleano).
console.log(null == undefined); // true (null y undefined si equivalen entre ellos)
console.log(0 == false); // true
console.log({} == false); // Empty object -> false
console.log([] == false); // Empty array -> true

function sayHello(name) {
  if(name) { // name no está vacío, ni es undefined, ni null
    console.log(`Hello ${name}`);
  } else {
    console.error('Name cannot be empty');
  }
}

/**
 * Otros operadores relacionales
 */

console.log(6 >= 6); // true
console.log(3 < "5"); // true ("5" => 5)
console.log("adios" < "bye"); // true
console.log("Bye" > "Adios"); // true
console.log("Bye" > "adios"); // false. Las letras mayúsculas van antes
console.log("ad" < "adios"); // true

/** 
 * Operadores lógicos
 */

console.log(!true); // Prints false
console.log(!(5 < 3)); // Prints true (!false)

console.log(4 < 5 && 4 < 2); // Prints false (both conditions need to be true)
console.log(4 < 5 || 4 < 2); // Prints true (only one condition has to be true)

/**
 * Se puede usar el operador &&, o el operador ||, con valores que no son booleanos. 
 * La expresión devolverá uno de los 2 valores. El operador || devuelve el primer valor si 
 * este equivale a true, o el segundo en caso contrario. El operador && hará lo opuesto 
 * (devolverá el segundo valor solo si el primero es cierto).
 */
console.log(0 || "Hello"); // Prints "Hello"
console.log(45 || "Hello"); // Prints 45
console.log(45 && "Hello"); // Prints Hello
console.log(undefined && 145); // Prints undefined
console.log(null || 145); // Prints 145
console.log("" || "Default"); // Prints "Default"