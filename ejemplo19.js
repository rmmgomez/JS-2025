class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hola, soy ${this.name}`);
    }
    
    sayType() {
        console.log("Soy un usuario");
    }
}

class Admin extends User {
    constructor(name) {
        super(name); // Llamamos al constructor de User
    }

    sayType() { // Método sobrescrito
        super.sayType(); // Llamamos a User.sayType (método del padre)
        console.log("Pero también un admin");
    }
}

let admin = new Admin("Anthony");
admin.sayHello(); // Imprime "Hola, soy Anthony"
admin.sayType(); // Imprime "Soy un usuario" y "Pero también un admin"


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    toString() {
        return `${this.nombre} (${this.edad})`
    }
    valueOf() {
        return this.edad; // Los objetos se compararán por edad
    }
}

let p = new Persona("Ana", 34);
console.log("Persona: " + p); // # Persona: Ana (34)
let p2 = new Persona("Juan", 25);

console.log(p > p2); // true


console.log("Desestructuración de objetos");
let usuario = {
    id: 3,
    nombre: "Pedro",
    email: "peter@gmail.com"
}

let {id, nombre, email} = usuario;
console.log(nombre); // Imprime "Pedro"

// Se pueden asignar variables con nombres diferentes a los atributos
let {nombre: nombreUsuario, email: emailUsuario} = usuario;
console.log(nombreUsuario); // Imprime "Pedro"

// Esta función recibirá un objeto como primer parámetro y lo desestructurará en variables
function imprimirUsuario({id, nombre, email}, otraInfo = "Nada") {
    // Cuerpo de la función
}

imprimirUsuario(usuario, "Es muy listo");


console.log("Spread de objetos");
function configGame(options) {
    let defaults = {
        name: "Player 1",
        level: 1,
        difficulty: "normal",
        gender: "female"
    };

    let config = {...defaults, ...options}; // Combinamos el objeto defaults con options
    console.log(config);
}

let options = {
    name: "Super Master",
    gender: "male"
};
configGame(options); // {name: "Super Master", level: 1, difficulty: "normal", gender: "male"}