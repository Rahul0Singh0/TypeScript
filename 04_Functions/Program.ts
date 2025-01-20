function sum(a: number, b: number) : number {
    return  a + b;
}
console.log(sum(4, 5.4))

// Optional Chaining
// This code check at during compile time
const add = function (a: number, b?: number) : number {
    return a + (b || 0);
}

console.log(add(2));