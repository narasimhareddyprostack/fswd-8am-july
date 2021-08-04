class Order {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
}
let obj1 = new Order("Iphone Order", 50000);
document.write(JSON.stringify(obj1))