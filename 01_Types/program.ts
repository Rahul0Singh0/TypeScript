/**
 * Types in TypeScript
 * 
 *  Below are all primitive types in TS
 * 
 *  string -> store text
 *  number -> integers, real
 *  boolean
 *  undefined
 *  null
 *  bigint
 *  symbol
 * 
 *  var <variable_name> : number = <value> // type annotation or type signature
 */
// let id = 5;
let id : number = 5;
let firstName : string = 'Rahul';
// firstName = false; // TS does not support dynamic typing
console.log(id, firstName);

// Union of type
let userId : number | string = "26";
userId = 25;
console.log(userId);
let a : any = 23;
a = true;
console.log(a);