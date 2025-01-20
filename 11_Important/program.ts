interface Loggable {
    log: () => void;
};

function logItems<T extends Loggable>(items: T[]): void {
    items.forEach(item => item.log());
}

interface IEvent {
    name: string,
    timing: string,
    cost: number
}

class Move implements IEvent {
    name: string;
    timing: string;
    cost: number;
    constructor(name: string, timing: string, cost: number) {
        this.name = name;
        this.timing = timing;
        this.cost = cost;
    }
}