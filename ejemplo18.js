console.log("Ejemplo de clase producto");
class Product {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    getDescuento(descuento) {
        let totalDesc = this.precio * descuento / 100;
        return this.precio - totalDesc;
    }
}

let p = new Product("Producto", 50);
console.log(p); // Product {nombre: "Producto", precio: 50}
console.log(p.getDescuento(20)); // Imprime 40

console.log("Ejemplo de clase User como Java");

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }
    getName() { // Getter
        return this.#name;
    }

    setName(name) { // Setter
        this.#name = name;
    }
}

let u = new User("Pepe");
// console.log(u.#name); // ERROR: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
let user = new User("john");
user.setName("Alex");
console.log(user.getName()); // Alex

console.log("Ejemplo de clase planta estilo C# / Python");
class Plant {
    #name;

    constructor(name) {
        this.name = name; // Llamada implícita al setter
    }

    get name() { // Getter
        return this.#name;
    }

    set name(name) { // Setter
        this.#name = name;
    }
  }

let plant = new Plant("Lippia");
user.name = "Monstera"; // Llamada implícita al setter
console.log(user.name); // Llamada implícita al getter

console.log("Ejemplo de propiedades estáticas");
class Empleado {
    static #sueldoMinimo = 15000;

    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    static creaBecario(nombre) {
        return new Empleado(nombre, Empleado.#sueldoMinimo);
    }
}

let e = Empleado.creaBecario("Elena");
console.log(e); // Empleado {nombre: 'Elena', sueldo: '15000'}