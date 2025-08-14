/**
 * En JavaScript, la clase Date se utiliza para representar una fecha, hora y zona horaria
 */
let date = new Date(); // Crea objeto Date almacena la fecha actual
console.log(typeof date); // Imprime object
console.log(date instanceof Date); // Imprime true
console.log(date); // Imprime por ejemplo: Fri Jun 24 2016 12:27:32 GMT+0200 (CEST)

let datems  = new Date(1363754739620); // Nueva fecha 20/03/2013 05:45:39 (milisegundos desde Epoch)
console.log(datems); // Imprime por ejemplo: Wed Mar 20 2013 05:45:39 GMT+0100 (CET)
let date2 = new Date(2015, 5, 17, 12, 30, 50); // 17/06/2015 12:30:50 (Mes empieza en 0 -> Ene, ... 11 -> Dic)
console.log(date2); // Imprime por ejemplo: Wed Jun 17 2015 12:30:50 GMT+0200 (CEST)
let date3 = new Date("2015-03-25"); // Formato de fecha largo sin la hora YYYY-MM-DD (00:00:00)
console.log(date3); // Imprime por ejemplo: Wed Mar 25 2015 00:00:00 GMT+0100 (CET)
let date4 = new Date("2015-03-25T12:00:00"); // Formato fecha largo con la fecha
console.log(date4); // Imprime por ejemplo: Wed Mar 25 2015 12:00:00 GMT+0100 (CET)
let date5 = new Date("03/25/2015"); // Formato corto MM/DD/YYYY
console.log(date5); // Imprime por ejemplo: Wed Mar 25 2015 00:00:00 GMT+0100 (CET)
let date6 = new Date("25 Mar 2015");  // Formato corto con el mes en texto (March también sería válido).
console.log(date6); // Imprime por ejemplo: Wed Mar 25 2015 00:00:00 GMT+0100 (CET)
let date7 = new Date("Wed Mar 25 2015 09:56:24 GMT+0100 (CET)"); // Formato completo con timezone
console.log(date7); // Imprime por ejemplo: Wed Mar 25 2015 09:56:24 GMT+0100 (CET)

// Crear la fecha actual en MS
let nowMs = Date.now(); // Momento actual en ms
let dateMs = Date.parse("25 Mar 2015"); // 25 Marzo 2015 en ms
let dateMs2 = Date.UTC(2015, 2, 25); // 25 Marzo 2015 en ms

/**
 * Métodos de la clase Date
 */
// Crea un objeto fecha de hace 2 horas
let twoHoursAgo = new Date(Date.now() - (1000*60*60*2)); // (Ahora - 2 horas) en ms
// Ahora hacemos lo mismo,pero usando el método setHours
let now = new Date();
now.setHours(now.getHours() - 2); 
// tenemos getter y setter para fullYear, month, date, hours, minutes, seconds, milliseconds
console.log("Día de la semana: " + now.getDay()); // Devuelve el día de la semana (0-6) (0 es Domingo)


// Imaginemos que ahora es 01/06/2016

console.log(now.toString());
console.log(now.toISOString()); // Imprime 2016-06-26T18:00:31.246Z
console.log(now.toUTCString()); // Imprime Sun, 26 Jun 2016 18:02:48 GMT
console.log(now.toDateString()); // Imprime Sun Jun 26 2016
console.log(now.toLocaleDateString()); // Imprime 26/6/2016
console.log(now.toTimeString()); // Imprime 20:00:31 GMT+0200 (CEST)
console.log(now.toLocaleTimeString()); // Imprime 20:00:31

/**
 * Internalización fechas, números, cadenas 
 */
let palabras = ['adiós', 'árbol', 'oído', 'óptimo', 'ñapa', 'niño'];
palabras.sort();
console.log(palabras.toString()); // adiós,niño,oído,árbol,ñapa,óptimo (ordena en ingés - por defecto)
palabras.sort(new Intl.Collator('es').compare);
console.log(palabras.toString()); // adiós,árbol,niño,ñapa,oído,óptimo (ordena en español)

/**
 * Internalización de una lista
 */

let animales = ['perro', 'gato', 'pez', 'loro'];

const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
console.log(formatter.format(animales)); // perro, gato, pez y loro

const formatter2 = new Intl.ListFormat('es', { style: 'long', type: 'disjunction' });
console.log(formatter2.format(animales)); // perro, gato, pez o loro

const formatter3 = new Intl.ListFormat('es', { style: 'short', type: 'unit' });
console.log(formatter3.format(animales)); // perro, gato, pez, loro

/**
 * Internalización de números y monedas
 */
let number = 15300.9555;

console.log(new Intl.NumberFormat('en-UK').format(number)); // 15,300.956
console.log(new Intl.NumberFormat('es-ES').format(number)); // 15.300,956

console.log(new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(number));
// 15.300,96 €
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number));
// $15,300.96

/**
 * Internalización de fechas
 */

let intFechas = new Date('2022-04-25');

console.log(new Intl.DateTimeFormat('es-ES').format(intFechas)); // 25/4/2022 (por defecto)

console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "short"
}).format(intFechas)); // 25/4/22

console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "full"
}).format(intFechas)); // lunes, 25 de abril de 2022

console.log(new Intl.DateTimeFormat('es-ES', {
    day: "2-digit", month: "2-digit", year: "numeric"
}).format(intFechas)); // 25/04/2022

console.log(new Intl.DateTimeFormat('es-ES', {
    day: "numeric", month: "long", year: "numeric" ,
    hour: 'numeric', minute: 'numeric', hourCycle: 'h12', dayPeriod: 'long'
}).format(intFechas)); // 25 de abril de 2022 2:00 de la madrugada