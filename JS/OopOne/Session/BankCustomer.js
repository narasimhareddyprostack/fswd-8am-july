class Customer {
    min_Bal = 500;
    open_Account() {
        console.log("Hello, Account Opened Successfully")
    }
    close_Account() { }
    get_Balance() { }
    min_Statement() { }
    deposit() { }
    withdraw() { }
}
let c1 = new Customer();
console.log(c1)
c1.open_Account();

let c2 = new Customer()
console.log(c2.min_Bal)
c2.open_Account()