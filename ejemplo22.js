'use strict';
// Tamaño total de la ventana (excluye la barra superior del navegador)
console.log(window.outerWidth + " - " + window.outerHeight);
/* window.open("https://www.google.com"); */

// Propiedades de la pantalla
console.log(window.screen.width + " - " + window.screen.height); // Ancho de pantalla y alto (Resolución)
console.log(window.screen.availWidth + " - " + window.screen.availHeight); // Excluyendo la barra del S.O.

// Propiedades del navegador
console.log(window.navigator.userAgent); // Imprime la información del navegador
window.navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
});

//  Podemos omitir el objeto window (está implícito)
console.log("Paǵs visitadas: " + history.length); // Páginas visitadas en la pestaña actual. Lo mismo que window.history.length


console.log(new Date().toString()); // Imprime inmediatamente la fecha actual
setTimeout(() => console.log("Pasados 5 segundos " + new Date().toString()), 5000);  // Se ejecutará en 5 segundos (5000 ms)

// setTimeout devuelve un número con el id, y a partir de ahí, podremos cancelarlo
let idTime = setTimeout(() => console.log(new Date().toString()), 5000);
clearTimeout(idTime); // Cancela el timeout (antes de que se ejecute)

let num = 1;
let intInc = setInterval(() => console.log(num++), 1000); // Imprime un número y lo incrementa cada segundo
setTimeout(() => {
    clearInterval(intInc); // Cancela el intervalo después de 5 segundos
    console.log("Intervalo cancelado");
}, 5000);

function multiply(num1, num2) {
    console.log(`Resultado multiplicación(${num1}x${num2}): ` +  num1 * num2);
}

setTimeout(multiply, 3000, 5, 7); // Después de 3 segundos imprimirá 35 (5*7)

console.log("href: " + location.href); // Imprime la URL actual
console.log("host: " + location.host); // Imprime el nombre del servidor (o la IP) como “localhost” 192.168.0.34
console.log("port: " + location.port); // Imprime el número del puerto (normalmente 80)
console.log("protocol: " + location.protocol); // Imprime el protocolo usado (http ó https)
console.log("search: " + location.search); // Imprime los parámetros de búsqueda de la url (Ej: '?p1=1&p2=2')

/* location.reload(); // Recarga la página actual
location.assign("https://google.com"); // Carga una nueva página
location.replace("https://google.com"); // Carga una nueva página sin guardar la actual en el objeto history */

console.log(history.length); // Imprime el número de páginas almacenadas

/* history.back(); // Vuelve a la página anterior
history.forward(); // Va hacia la siguiente página
history.go(2); // Va dos páginas adelante (-2 iría dos páginas hacia atrás)
 */

alert("Hola mundo!");
if(confirm("Do you like dogs?")) {
    console.log("You are a good person");
} else {
    console.log("You have no soul");
}

let nombre = prompt("What's your name?", "Nobody");

if(nombre) {
    console.log("Your name is: " + nombre);
} else {
    console.log("You didn't answer!");
}