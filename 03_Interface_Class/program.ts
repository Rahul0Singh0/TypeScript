/**
 * How to defined types for objects
 *  - class: data members, member functions
 *    classes contains implementations of member functions as well
 * 
 *  - interface: Its a contract
 *    do not provide any kind of implementation
 *    used to defined the structure of the object
 */

class Car {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
};

interface Product {
    name: string;
    price: number;
    brand: string;

    display(): void;
}

// let p1 : new Product(); // It is not allowing us to do this, can't call new directly on the interface

let c1 = new Car("Santro");
c1.display();

let p1 : Product = {
    name: "Iphone",
    price: 100000,
    brand: "Apple",
    display: () => {
        console.log("display");
    }
}

console.log(p1);