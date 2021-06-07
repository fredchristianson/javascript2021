console.log("address.js loaded and running");

export class Address {
    constructor(street='unknown',city='unknown',state='unknown',zip='unknown') {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        console.log(`Address created: ${this.toString()}`);
    }

    toString() {
        return `${this.street} ${this.city}, ${this.state} ${this.zip}`;
    }
}

export const defaultAddress = new Address("123 Main St.","Sarasot","FL","34236");

export default Address;