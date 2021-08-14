class Bank {
  min_Bal;
  acc_No;
  name;
  amount;
  rule = { min_Time: "5 Years", charges: "5%" };
  constructor(a, b, c) {
    this.acc_No = a;
    this.name = b;
    this.amount = c;
  }
  openAccount() {}
  getBal() {
    return this.amount;
  }
  min_State() {}
  closeAccount() {}
  getCharges() {
    return this.rule.charges;
  }
}

let c1 = new Bank(101, "Narasimha", 1000);
/* console.log(c1.min_Bal);
console.log(c1.amount); */
/* console.log(c1); */

let c2 = new Bank(102, "Rajul", 5000);
console.log(c2);
/* console.log(c2.amount); */
console.log(c2.rule.charges);
console.log("invoking", c2.getCharges());
