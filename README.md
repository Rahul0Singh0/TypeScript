# TypeScript Learning

[Click](https://www.typescriptlang.org/docs/)

## Install the Typescript in your system:

``` bash
npm install -g typescript
tsc --version
```
[Click](https://www.typescriptlang.org/download/)

## Introduction
* TypeScript is a superset of JavaScript that adds optional static typing and other features to improve the development
* Strictly Typed Language
* TypeScript is designed to help catch errors early and improve code maintainability.

## The primitives: string, number, and boolean
* TypeScript has the same basic types as JavaScript: number, string, and boolean.
* TypeScript doesn’t use “types on the left”-style declarations like int x = 0; Type annotations will always go after the thing being typed
   ``` TypeScript
   let myName: string = "Rahul Singh";
   let isTrue: boolean = true;
   let number: number = 10;
   ```
* In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types in your code. For example, the type of a variable is inferred based on the type of its initializer:
   ``` TypeScript
   let myName = "Rahul Singh";
   ```

## Array
To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<> when we cover generic.
Note that [number] is different thing; refer to the section on tupple
   ``` TypeScript
   let myArray: number[] = [1, 2, 3, 4, 5];
   let arr = [ 1, "2", 3 ];
   arr.push('rahul');
   myArray.push('a'); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
   ```