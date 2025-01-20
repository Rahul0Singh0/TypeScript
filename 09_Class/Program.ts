class Product {
    // default visibility is public
    // name: string;
    public name: string;
    private price: number | undefined;
    readonly category: string;
    readonly tags: string[];

    constructor(name: string, category: string, price?: number) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.tags = ["electronics", "mobile"];
    }
    display(): void {
        // this.tags = []; // re-assignment is not possible 
        // this.tags[0] = "something" // possible
        console.log("Product name is ", this.name, "and price is ", this.price);
    }
    setPrice(p: number): void {
        if(p <= 0) return;
        this.price = p;
    }
    // buggyFunction(): void {
    //     this.category = "";
    // }
};

const p1 = new Product("Iphone", "electronics", 100000);
const p2 = new Product("Iphone1","electronics");
// p1.price = 20000;
p1.setPrice(20000);
p2.setPrice(50000);
// category can never be updated from outside or inside the class
// p1.category = "Phone"; // assign the value only once at initialization time using constructer
console.log(p1, p2);