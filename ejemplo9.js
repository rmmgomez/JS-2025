let string1 = "This is a string";
let string2 = 'This is another string';

console.log(string1 + " - " + string2); // This is a string - This is another string

console.log("Hello 'World'"); // Hello 'World'
console.log('Hello \'World\''); // Hello 'World'

console.log("Hello \"World\""); // Hello "World"
console.log('Hello "World"'); // Hello "World"

/**
 * Template literals - ES2015 
 */

let num = 13;
console.log(`Ejemplo de cadena multi-línea,
el valor de num es: ${num}`);

/**
 * Operaciones con cadenas
 */

let s1 = "This is a string";
// Longitud de una cadena
console.log(s1.length); // 16

// Obtener un carácter de la cadena
console.log(s1.charAt(0)); //  "T" -> equivale a s1[0]

// Obtiene el índice donde aparece por primera vez la subcadena a buscar (-1 si no lo encuentra)
console.log(s1.indexOf("s")); // 3

// Índice donde la subcadena aparece por última vez (o -1)
console.log(s1.lastIndexOf("s")); // 10

// Devuelve un array con las coincidencias encontradas en base a una expresión regular
console.log(s1.match(/.s/g)); // ["is", "is", " s"]

// Índice de la primera coincidencia con la expresión regular
console.log(s1.search(/[aeiou]/)); // 2 (posición de la primera vocal)

// Reemplaza lo que coincida con una expresión regular (o string) por otra cosa 
// En una expresión regular, la opción final g implica todas las coincidencias (si no, solo la primera)
console.log(s1.replace(/i/g, "e")); // "Thes es a streng"

// Devuelve una subcadena (posición inicial: incluida, posición final: excluida)
// A diferencia de substring, aquí podemos usar índices negativos para contar desde el final
console.log(s1.slice(5, 7)); // "is"

// Igual que slice
console.log(s1.substring(5, 7)); // "is"

// Transforma la cadena a minúsculas
console.log(s1.toLocaleLowerCase()); // "this is a string"

// Transforma la cadena a mayúsculas
console.log(s1.toLocaleUpperCase()); // "THIS IS A STRING"

// Borra los espacios, tabuladores y saltos de línea a principio y final
// También tenemos trimEnd (solo final) y trimStart (solo principio)
console.log("   String with spaces   ".trim()); // "String with spaces"

/** 
 * Convertir a cadena
 */

let num1 = 32;
let num2 = 14;

// Si se utiliza el operador '+' con un operando de tipo string, el otro se convierte automáticamente y se concatena
console.log(String(32) + 14); // 3214
console.log("" + 32 + 14); // 3214