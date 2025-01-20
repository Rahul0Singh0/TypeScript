// Date Object in TS
const dob = new Date(1998, 3, 11);
console.log(dob);
console.log(dob.getDate());

/**
 * any type object
 * 
 * if you want to define a variable with type any, then either mention ": any" while declaring the variable
 * or donot assign a value while declaring a variable
 */

// let x: any = 10;
let x; // this variable x is of type any
x = 10;
x = "10";

// void return type
function fun(): void {
    console.log("function with void return type");
}

console.log(fun());

// Union return type in function
function f(): (number | string) {
    return 10;
}