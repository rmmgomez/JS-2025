'use strict';
/**
 * Un diccionario (Map) es una colección que guarda parejas de [clave,valor], los valores son accedidos usando la correspondiente clave. 
 */

let person1 = {name: "Peter", age: 21};
let person2 = {name: "Mary", age: 34};
let person3 = {name: "Louise", age: 17};

let hobbies = new Map(); // Almacenará una persona con un array de hobbies (string)
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
console.log(hobbies); // Map {Object {name: "Peter", age: 21} => ["Tennis", "Computers", "Movies"]}

hobbies.set(person2, ["Music", "Walking"]);
hobbies.set(person3, ["Boxing", "Eating", "Sleeping"]);
console.log(hobbies);

// Debemos acceder usando su referencia
console.log(hobbies.has(person1)); // true (referencia al objeto original almacenado)
console.log(hobbies.has({name: "Peter", age: 21})); // false (mismas propiedades pero objeto diferente!)

 // Continuamos con el código anterior
console.log(hobbies.size); // Imprime 3
hobbies.delete(person2); // Elimina person2 del Map
console.log(hobbies.size); // Imprime 2
console.log(hobbies.get(person3)[2]); // Imprime "Sleeping"

/** Recorremos Map y lo imprimimos:
 * Peter: Tennis, Computers, Movies
 * Louise: Boxing, Eating, Sleeping */
for(let entry of hobbies) {
    console.log(entry[0].name + ": " + entry[1].join(", "));
}

for(let [person, hobArray] of hobbies) { // Mejor
    console.log(person.name + ": " + hobArray.join(", "));
}

hobbies.forEach((hobArray, person) => { // Mejor
    console.log(person.name + ": " + hobArray.join(", "));
});

/**
 * Conjunto SET: Similar a map pero no almacena el valor, sólo clave. Por tanto no se permiten duplicados.
 */

console.log("----- Set -----");
let set = new Set();
set.add("John");
set.add("Mary");
set.add("Peter");
set.delete("Peter");
console.log(set.size); // Imprime 2

set.add("Mary"); // Mary ya existe
console.log(set.size); // Imprime 2

// Itera a través de los valores
set.forEach(value => {
    console.log(value);
});

// Podemos crear un Set desde un array (lo cual elimina los valores duplicados).
let names = ["Jennifer", "Alex", "Tony", "Johny", "Alex", "Tony", "Alex"];
let nameSet = new Set(names);
console.log(nameSet); // Set {"Jennifer", "Alex", "Tony", "Johny"}
names = [...nameSet]; // Reasignamos el array con los duplicados eliminados
