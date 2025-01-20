const result = {
    name: "Rahul",
    marks: 98
};

// The type of the above raw object is inferred as {name: string, marks: number}
// something like the given object below
// const result : {name: string, marks: number, address?: string} = {
//     name: "Rahul",
//     marks: 98
// };

console.log(result);

// updating an old key value pair
result.marks = 99; // do you thinks TS will allow this?

// adding a new key value pair
result.address = "xyz"; // do you think TS will allow this?

/**
 * Now the above statement will throw a compiler error because in the type
 * {name: string, marks: number} we never mentioned about any address. 
 * Thats why typescript think we are violating the default type
 * To solve this, we can add an additional optional address property while
 * defining the object
 * const result : {name: string, marks: number, address?: string} = {
 *     name: "Rahul",
 *     marks: 98
 * };
 * 
 */

console.log(result);

type Details = {name: string, marks: number, address?: string};
// Details is kind of like an alias or a nickname to {name: string, marks: number, address?: string}

const result1 : Details = {
    name: "Rahul",
    marks: 98
};

const result2 : Details = {
    name: "Nitesh",
    marks: 100
};