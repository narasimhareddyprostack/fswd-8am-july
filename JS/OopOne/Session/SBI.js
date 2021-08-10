class Bank {
    min_Bal = 500
    constructor(a, b, c) {
        this.acc_No = a;
        this.acc_Name = b;
        this.acc_Bal = c - this.min_Bal;
        console.log("Executing Automatically")
    }
    get_Bal = () => {
        return this.acc_Bal
    }
}
let c1 = new Bank(101, "Vinay", 1000);
console.log(c1.get_Bal());
console.log(c1.min_Bal)