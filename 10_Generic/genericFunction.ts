type pairOfNumbers = [number, number];
type pairOfNumbersAndString = [number, string];

// Generic Function
function linearSearch<T, R>(array: T[], x: T, y: R): [number, T] {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === x) {
            return [i, array[i]];
        }
    }
    console.log(y);
    return [-1, x];
}

const array: number[] = [1, 2, 3, 5, 12, 543, 1023, -34, -12];
console.log(linearSearch<number, string>(array, 5, "abc"));

const stringArray: string[] = ["aba", "def", "ghi", "jki"];
console.log(linearSearch<string, number>(stringArray, "def", 234));