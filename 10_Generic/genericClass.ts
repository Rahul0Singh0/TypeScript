// Generic class
class Stack<T> {
    private array: T[];
    constructor() {
        this.array = [];
    }

    push(x: T): void {
        this.array.push(x);
    }

    pop(): void {
        this.array.pop();
    }

    top(): T {
        return this.array[this.array.length-1];
    }

    display(): void {
        console.log(this.array);
    }
};

const st = new Stack<string>();
st.push("abc");
st.push("def");
st.push("xyz");
st.display();
st.pop();
console.log(st.top());