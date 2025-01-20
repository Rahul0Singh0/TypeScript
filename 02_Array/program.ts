/**
 * arrays
 * 
 * let <variable_name> : type[] = [val1, val2, val3, ....];
 */

let ids : number[] = [1,2,3,4,5]; // homogenous
let hetero : any[] = [1,2,'3','4',false]; // heterogenous 
// array union
let data : (number | string | boolean)[] = [1,'2',true];
console.log(ids, hetero, data);

// arrays in form of typed tuple
let data1 : [number, string, boolean] = [1, 'rahul', true];
console.log(data1);