/* import {Person, GUEST_NAME} from './person.class.js';

let p = new Person(GUEST_NAME, 30);
console.log(p.name); // Imprime "Anonymous" */

/* import {Person, GUEST_NAME} from './person.class.js';

let p = new Person(GUEST_NAME, 30);
console.log(p.name); // Imprime "Anonymous" */

/* import {Person as User, GUEST_NAME as GUEST} from './person.class.js';

let p = new User(GUEST, 30);
console.log(p.name); // Imprime "Anonymous" */

import * as personModule from './person.class.js';

let p = new personModule.Person(personModule.GUEST_NAME, 30);
console.log(p.name); // Imprime "Anonymous"