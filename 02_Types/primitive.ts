function printName(myName: string, age: number): void {
    console.log(myName, age);
}

// const myName: string = "String";
const myName = "String";
console.log(myName);

// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// printName(myName, '22');
printName(myName, 23);