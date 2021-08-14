let product = {
  name: "Iphone 5s",
  price: 50000,
  color: ["red", "blue", "grey"],
  moreDetails: () => {
    console.log("Good Morning");
    return "";
  },
};
console.log(product.name);
console.log(product.price);
console.log(product.discount);
console.log(product.moreDetails());

console.log(product.moreDetails);
console.log(product.getName());
