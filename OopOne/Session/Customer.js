class Customer {
    constructor(a, b) {
        this.acc_Number = a;
        this.acc_Name = b;
    }
    open_Account() { }
    close_Account() { }
    get_Statement() { }

}
let c1 = new Customer(101, 'Ravi');
let c2 = new Customer(102, ' Sreenivas')
let c3 = new Customer(103, 'Vinay')

console.log(c1);
console.log(c2);
console.log(c3);