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

/**
 * arrays
 * 
 * let <variable_name> : type[] = [val1, val2, val3, ....];
 */

let ids : number[] = [1,2,3,4,5]; // homogenous
let hetero : any[] = [1,2,'3','4',false]; // heterogenous 

let data : (number | string | boolean)[] = [1,'2',true];
console.log(ids, hetero, data);

// arrays in form of typed tuple
let data1 : [number, string, boolean] = [1, 'rahul', true];
console.log(data1);