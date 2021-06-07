console.log("person.js loaded and running");
import {defaultAddress,default as Address} from './address.js';
console.log('person.js loaded module address.js');


export class Person {
    constructor(name='unnamed',address=null) {
        this.name = name;
        this.address = address;
        console.log(`Created person: ${this.toString()}`);
    }

    toString() {
        return `${this.name}.  ${this.address?.toString?.() ?? 'no address'}`;
    }
}

export const defaultPerson = new Person("Fred Christianson",defaultAddress);

export default Person;