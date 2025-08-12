/**
 * Los ARRAYs en JS son dinámicos, no tienen un tamaño fijo, y pueden ser de diferentes tipos de datos.
 */

let a = new Array(); // Crea un array vacío
a[0] = 13; // Asigna la primera posición del array
console.log("Imprimo la longitud array " + a.length); // Imprime 1
console.log("Imprimo a[0] " + a[0]); // Imprime 13
console.log("Imprimo a[1] " + a[1]); // Imprime undefined (posición no asignada aún)
console.log("-------");

let  a2 = new Array(12); // Crea un array de tamaño 12
console.log("Imprimo la longitud del array2 " + a2.length); // Imprime 12
a2[20] = "Hello";
// La longitud de un array depende de la última posición que ha sido asignada
console.log("Imprimo la longitud del array2 " + a2.length); // Ahora imprime 21 (0-20). Las posiciones 0-19 tendrán el valor undefined 
console.log("-------");

let  a3 = new Array("a", "b", "c", "d", "e"); // Array con 5 valores
console.log("Imprimo el array3[3] " + a3[3]); // Imprime "d"
a3.length = 2; // Posiciones 2-4 serán destruidas
console.log("Imprimo el array3[3] " + a3[3]); // Imprime undefined, ha sido borrado
console.log("-------");

//Puedes crear un array usando directamente la notación de corchetes en lugar de usar new Array()
let  a4 = ["a", "b", "c", "d", "e"]; // Array de tamaño 5, con 5 valores inicialmente
console.log("Tipo de dato array4 " + typeof a4); // Imprime object
console.log(a4 instanceof Array); // Imprime true. a es una instancia de array
a4[a4.length] = "f"; // Insertamos un nuevo elemento al final
console.log("Imprimo el array4 " + a4); // Imprime ["a", "b", "c", "d", "e", "f"]
console.log("-------");

/**
 * Recorriendo arrays 
 * */

let  ar = [4, 21, 33, 24, 8];

let i = 0;
while(i < ar.length) { // Imprime 4 21 33 24 8
    console.log(ar[i]);
    i++;
}
console.log("-------");
for(let i = 0; i < ar.length; i++) { // Imprime 4 21 33 24 8
    console.log(ar[i]);
}
console.log("-------");
for (let i in ar) { // Imprime 4 21 33 24 8
    console.log(ar[i]);
}
console.log("-------");
// Podemos recorrer un array sin necesidad de usar el índice
let aItems = ["Item1", "Item2", "Item3", "Item4"];

for(let item of aItems) {
    console.log(item);
}
console.log("-------");
let str = "abcdefg";

for(let letter of str) {
    if(letter.match(/^[aeiou]$/)) {
        console.log(letter + " es una vocal");
    } else {
        console.log(letter + " es una consonante");
    }
}
console.log("-------");
/**
 * Metodos de un array
 */

let  array = ["a"];
array.push("b", "c", "d"); // Inserta nuevos valores al final del array
console.log(array); // Imprime ["a", "b", "c", "d"]
array.unshift("A", "B", "C"); // Inserta nuevos valores al principio del array
console.log(array); // Imprime ["A", "B", "C", "a", "b", "c", "d"]
console.log(array.pop()); // Imprime y elimina la última posición → "d"
console.log(array.shift()); // Imprime y elimina la primera posición → "A"
console.log(array); // Imprime ["B", "C", "a", "b", "c"]
console.log("-------");
/**
 * Convertir un array en cadena con join
 */
let  aCadena = [3, 21, 15, 61, 9];
console.log(aCadena.join()); // Imprime "3,21,15,61,9""
console.log(aCadena.join(" -#- ")); // Imprime "3 -#- 21 -#- 15 -#- 61 -#- 9"
console.log("-------");

/**
 * Convertir una cadena en array
 */
let s = "tenedor";
console.log(Array.from(s)); // ['t', 'e', 'n', 'e', 'd', 'o', 'r']
console.log("-------");
/**
 * Concatenar arrays
 */
let  arr1 = ["a", "b", "c"];
let  arr2 = ["d", "e", "f"];
let  arr3 = arr1.concat(arr2);
console.log(arr3); // Imprime ["a", "b", "c", "d", "e", "f"]
console.log(arr1); // Imprime ["a", "b", "c"] . El array original no ha sido modificado
console.log("-------");
/**
 * Obtener subarrays con slice
 */
let original = ["a", "b", "c", "d", "e", "f"];
let final = original.slice(1, 3); // (posición de inicio → incluida, posición final → excluida)
console.log(final); // Imprime ["b", "c"]
console.log(original); // Imprime ["a", "b", "c", "d", "e", "f"]. El array original se modifica
console.log(original.slice(3)); // Un parámetro. Devuelve desde la posición 3 al final → ["d", "e", "f"] 
console.log("-------");

/**
 * Insertar y borrar en posiciones intermedias
 */
let  intermedias = ["a", "b", "c", "d", "e", "f"];
intermedias.splice(1, 3); // Elimina 3 elementos desde la posición 1 ("b", "c", "d")
console.log(intermedias); // Imprime ["a", "e", "f"]
intermedias.splice(1,1, "g", "h"); // Elimina 1 elemento en la posición 1 ("e"), e inserta "g", "h" en esa posición
console.log(intermedias); // Imprime ["a", "g", "h", "f"]
intermedias.splice(3, 0, "i"); // En la posición 3, no elimina nada, e inserta "i"
console.log(intermedias); // Imprime ["a", "g", "h", "i", "f"]
// IMPORTANTE: nos devuelve el resultado como un nuevo array sin modificar el original
let intermedias2 = intermedias.toSpliced(2, 1, "H");
console.log(intermedias); // ["a", "g", "h", "i", "f"] -> No modificado
console.log(intermedias2); // ["a", "g", "H", "i", "f"]
console.log("-------");

/**
 * Invertir el array
 */
let  invertir = ["a", "b", "c", "d", "e", "f"];
console.log(invertir.toReversed()); // ["f", "e", "d", "c", "b", "a"]
console.log(invertir); // ["a", "b", "c", "d", "e", "f"] -> Array original no modificado

invertir.reverse(); // Invierte el orden del array original
console.log(invertir); // ["f", "e", "d", "c", "b", "a"]
console.log("-------");

/**
 * Ordenar un array
 */
let  ordenar = ["Peter", "Anne", "Thomas", "Jen", "Rob", "Alison"];
console.log(ordenar.toSorted()); // ["Alison", "Anne", "Jen", "Peter", "Rob", "Thomas"]
console.log(ordenar); // ["Peter", "Anne", "Thomas", "Jen", "Rob", "Alison"] -> Original no modificado

ordenar.sort(); // Ordena el array original
console.log(ordenar); // ["Alison", "Anne", "Jen", "Peter", "Rob", "Thomas"]
console.log("-------");

/**
 * Comparación de array NO ALFABÉTICA
 */

let aNumerico = [20, 6, 100, 51, 28, 9];
aNumerico.sort(); // Ordena el array alfabéticamente
console.log(aNumerico); // Imprime [100, 20, 28, 51, 6, 9]
aNumerico.sort((n1, n2) => n1 - n2); // Trabajando con números, podemos devolver la resta
console.log(aNumerico); // Imprime [6, 9, 20, 28, 51, 100]
console.log("-------");
/**** Ejemplo con objetos, que veremos más adelante ****/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() { 
    return this.name + " (" + this.age + ")";
  }
}

let people = [
  new Person("Thomas", 24),
  new Person("Mary", 15),
  new Person("John", 51),
  new Person("Phillip", 9)
];

people.sort((p1, p2) => p1.age - p2.age); // Ordenamos por edad número
console.log(people.toString()); // "Phillip (9),Mary (15),Thomas (24),John (51)"

people.sort((p1, p2) => p1.name.localeCompare(p2.name)); // Ordenamos por nombre (string)
console.log(people.toString()); // "John (51),Mary (15),Phillip (9),Thomas (24)"
console.log("-------");
/**
 * Cambiar el valorde una posición generando un nuevo array
 */
let  aInicial = [1, 2, 3, 4];
let aFinal = aInicial.with(2, 99); // En lugar de hacer a[2] = 99
console.log(aInicial); // [1, 2, 3, 4] -> Original
console.log(aFinal); // [1, 2, 99, 4] -> Nuevo array con el cambio
console.log("-------");

/**
 * Recorrer un array con forEach
 */
let aEach = [3, 21, 15, 61, 9, 54];

aEach.forEach((num, indice, array) => { // índice y array son parámetros opcionales
    console.log(indice + " -> " + num);
});
console.log("-------");
/**
 * Comprobar una condición con todos los elementos
 */

let aComprobar = [3, 21, 15, 61, 9, 54];
console.log(aComprobar.every(num =>  num < 100));  // Comprueba si cada número es menor a 100. Imprime true
console.log(aComprobar.every(num => num % 2 == 0)); // Comprueba si cada número es par. Imprime false

console.log(aComprobar.some(num => num % 2 == 0));  // Comprueba si algún elemento del array es par. Imprime true
console.log("-------");

/**
 * Modificando todo los elementos del array
 */
let  aMap = [4, 21, 33, 12, 9, 54];
console.log(aMap.map(num => num*2)); // Imprime [8, 42, 66, 24, 18, 108]
console.log("-------");

/**
 * Filtrar los elementos del array
 */
let  aFilter = [4, 21, 33, 12, 9, 54];
console.log(aFilter.filter(num => num % 2 == 0));  // Imprime [4, 12, 54]
console.log("-------");

/**
 * Calcular valor a partir de array: reduce
 */
let  aReduce = [4, 21, 33, 12, 9, 54];
console.log(aReduce.reduce((total, num) => total + num, 0));  // Suma todos los elementos del array. Imprime 133
console.log(aReduce.reduce((max, num) => Math.max(max, num), 0));  // Número máximo del array. Imprime 54

console.log(aReduce.reduceRight((total, num)  => total - num)); // Imprime -25 (Toma la última posición como valor inicial al no proporcionarlo)
console.log("-------");

/**
 * Buscar elementos en un array
 */
let aBuscar = [3, 21, 15, 61, 9, 15];
console.log(aBuscar.indexOf(15)); // Imprime 2
console.log(aBuscar.indexOf(15, 3)); // Imprime 5
console.log(aBuscar.indexOf(56)); // Imprime -1. No encontrado
console.log(aBuscar.lastIndexOf(15)); // Imprime 5	
let numbers = [2, 4, 6, 9, 14, 16];
console.log(numbers.find(num => num >= 10)); // Imprime 14 (primer valor encontrado >= 10)
console.log(numbers.findIndex(num => num >= 10)); // Imprime 4 (numbers[4] -> 14)
console.log(numbers.findLast(num => num >= 10)); // Imprime 16 (último valor encontrado >= 10)
console.log(numbers.findLastIndex(num => num >= 10)); // Imprime 5 (numbers[5] -> 16)
console.log("-------");

/**
 * Extraer arrays internos
 */

let nums = [[1, 2, 3], [4, 5, 6]];
console.log(nums.flat()); // [1, 2, 3, 4, 5, 6]

let nums2 = [[[1, 2],[3,4]], [5,6], [[7, 8], 9]];
console.log(nums2.flat()); // [[1, 2], [3, 4], 5, 6, [7, 8], 9]
console.log(nums2.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
let words = ["house", "tree", "dog"];
console.log(words.map(w => Array.from(w))); // [["h", "o", "u", "s", "e"], ["t", "r", "e", "e"], ["d", "o", "g"]]
console.log(words.flatMap(w => Array.from(w))); // ["h", "o", "u", "s", "e", "t", "r", "e", "e", "d", "o", "g"]