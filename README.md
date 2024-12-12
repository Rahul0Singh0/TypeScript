# TYPESCRIPT Learning

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
   ```
* In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types in your code. For example, the type of a variable is inferred based on the type of its initializer:
   ``` TypeScript
   let myName = "Rahul Singh";
   ```
