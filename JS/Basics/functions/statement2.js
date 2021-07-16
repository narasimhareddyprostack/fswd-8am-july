let product = {
  product_Name: "Iphone 5s",
  price: 5000,
  color: ["red", "gray", "white"],
  getMoreDetails: function () {
    return "Hello";
  },
};
console.log(product.product_Name);
console.log(product.discout);
console.log(product.getMoreDetails);
console.log(product.getMoreDetails());
console.log(product.offer());
