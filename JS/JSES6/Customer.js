class Customer {
  min_Bal = 500;
  get_Bal = () => {
    return this.min_Bal + 100;
  };
}
let c1 = new Customer();
console.log(c1);
console.log(c1.min_Bal);
console.log(c1.get_Bal());
console.log(c1.closeAccount());
