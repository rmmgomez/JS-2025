'use strict';
/**
 * Rest es la acción de agrupar una serie de valores que se le pasan a una función/método bajo un único parámetro
 */

function getMedia(...notas) {
    console.log(notas); // Imprime [5, 7, 8.5, 6.75, 9] (está en un array)
    let total = notas.reduce((total,notas) => total + notas, 0);
    return total / notas.length;
}

console.log(getMedia(5, 7, 8.5, 6.75, 9)); // Imprime 7.25

function imprimirUsuario(nombre, ...lenguajes) {
    console.log(nombre + " sabe " + lenguajes.length + " lenguajes: " + lenguajes.join(" - "));
}

// Imprime "Pedro sabe 3 lenguajes: Java - C# - Python"
imprimirUsuario("Pedro", "Java", "C#", "Python");
// Imprime "María sabe 5 lenguajes: JavaScript - Angular - PHP - HTML - CSS"
imprimirUsuario("María", "JavaScript", "Angular", "PHP", "HTML", "CSS");


console.log("----- Spread -----");
/**
 * Spread es lo “opuesto” de rest
 */

let nums = [12, 32, 6, 8, 23];
console.log(Math.max(nums)); // Imprime NaN (array no es válido), deben ser valores independientes
console.log(Math.max(...nums)); // Imprime 32 -> equivale a Math.max(12, 32, 6 ,8 ,23)
let a = [1, 2, 3, 4];
let b = a; // 'b' referencia el mismo array que 'a' (las modificaciones afectan a ambas variables).
let c = [...a]; // Nuevo array (copia de a) -> contiene [1, 2, 3, 4].
b[1]=4; // OJO!!
console.log(a); // Imprime [1, 4, 3, 4] (modificación afecta a 'a' y 'b')
console.log(c); // Imprime [1, 2, 3, 4] 

// También nos permite crear un array con el contenido de otros arrays, es decir, concatenarlos
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [...arr1,...arr2, 9, 10]; //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr3);

/**
 * Desestructuración: Extraer elementos de un array
 */
console.log("----- Desestructuración -----");
let array = [150, 400, 780, 1500, 200];
let [v1, v2, v3] = array; // Asigna los tres primeros elementos del array
console.log(v3); // Imprime 780

let [v11, , v13] = array; // Asigna el primer y tercer elemento
console.log(v13); // Imprime 780

let [v21, v22, ...resto] = array; // resto será un array
console.log(resto); // Imprime [780, 1500 ,200]

// Si queremos asignar más valores de los que puede contener el array y no queremos asignar undefined, podemos asignar valores por defecto.
let array1 = ["Peter", "John"];
let [v31, v32 = "Mary", v33 = "Anne"] = array1;
console.log(v32); // Imprime "John"
console.log(v33); // Imprime "Anne" -> valor por defecto


let sueldos = [["Pedro", "Maria"], [24000, 35400]];
let [[nombre1, nombre2], [sueldo1, sueldo2]] = sueldos;
console.log(nombre1 + " gana " + sueldo1 + "€"); // Imprime "Pedro gana 24000€"


function imprimirUsuario([id, nombre, email], otraInfo = "Nada") {
    console.log("ID: " + id);
    console.log("Nombre: " + nombre);
    console.log("Email: " + email );
    console.log("Otra info: " + otraInfo );
}

let infoUsu = [3, "Pedro", "peter@gmail.com"];
imprimirUsuario(infoUsu, "No es muy listo");