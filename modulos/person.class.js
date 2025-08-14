/* export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export const ROLES = ["admin", "guest", "user"];
export const GUEST_NAME = "Anonymous"; */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const ROLES = ["admin", "guest", "user"];
const GUEST_NAME = "Anonymous";

export {Person, ROLES, GUEST_NAME};